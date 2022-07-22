<?php

namespace App\Http\Controllers;

use App\Constants\EventConstants;
use App\Models\Category;
use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class EventController extends Controller
{

    private $model;

    public function __construct()
    {
        $this->model = new Event();
    }

    public function create(Request $request)
    {
        $data = $this->validate($request, [
            'name' => 'required',
            'description' => 'required',
            'date' => 'required',
            'city' => 'required',
            'category_id' => 'required',
            'video_url' => 'required',
            'cover_photo' => 'required',
            'capacity' => 'required',
            'status' => 'required',
        ]);
        $data['user_id'] = Auth::id();

        $event = $this->model->create($data);

        return response()->json([
            "status" => "success",
            "data" => compact('event')
        ], 200);
    }

    public function getEventById($id)
    {
        $event = $this->model::join('users', 'user_id', '=', 'users.id')->findOrFail($id);

        return response()->json([
            "status" => "success",
            "event" => compact('event')
        ], 200);
    }

    public function createCategory(Request $request)
    {
        $cat = new Category();
        $data = $this->validate($request, [
            'name' => 'required',
            'cover_photo' => 'required',

        ]);

        $category = $cat->create($data);

        return response()->json([
            "status" => "success",
            "data" => compact('category')
        ], 200);
    }

    public function getAllCategories()
    {
        $category = Category::all();
        return response()->json([
            "status" => "success",
            "data" => compact('category')
        ], 200);
    }

    public function getEventsByCat($id)
    {
        $events = $this->model->where('category_id', '=', $id)->get();
        return response()->json([
            "status" => "success",
            "data" => compact('events')
        ], 200);
    }
    public function getEvents()
    {
        $events = Event::all();
        return response()->json([
            "status" => "success",
            "data" => compact("events")
        ], 200);
    }

    public function trendingEvents()
    {
        $trending = $this->model
            ->select(\DB::raw('count(attendees.event_id) as nbrAttendees, events.id,
            events.name,categories.name as cat_name,events.city,events.status,events.description,
            events.cover_photo,date,events.capacity,count(attendees.event_id)/capacity as ratio'))
            ->join('attendees', 'attendees.event_id', '=', 'events.id')
            ->join('categories', 'categories.id', '=', 'events.category_id')
            ->groupBy([
                'attendees.event_id', 'events.name', 'events.city', 'events.status',
                'events.cover_photo', 'events.id', 'date', 'events.capacity', 'categories.name', 'events.description'
            ])

            ->get();


        return response()->json([
            "status" => "success",
            "data" => compact("trending")
        ], 200);
    }

    public function videoTransfer(Request $request)
    {
        $vid = $request->file('video');
        $fileLink = url(Storage::url(Storage::put('public/files', $vid)));

        return response()->json([
            "status" => "success",
            "data" => compact("vid"),
            "link" => compact("fileLink")
        ], 200);
    }
}