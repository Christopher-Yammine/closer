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
            'banner_photo' => 'required',
            'capacity' => 'required',

        ]);
        $data['user_id'] = Auth::id();

        $event = Event::create($data);

        return response()->json([
            "status" => "success",
            "data" => compact('event')
        ], 200);
    }

    public function getEventById($id)
    {
        $event = Event::join('users', 'user_id', '=', 'users.id')
            ->join('categories', 'categories.id', '=', 'events.category_id')
            ->where('events.id', $id)
            ->get(['events.*', 'categories.name as cat_name', 'users.first_name', 'users.last_name']);

        return response()->json([
            "status" => "success",
            "data" => compact('event')
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

    public function getEventsByCat($id_cat)
    {
        $events = Event::where('category_id', $id_cat)->get();
        return response()->json([
            "status" => "success",
            "data" => compact('events')
        ], 200);
    }
    public function getEvents()
    {
        $events = Event::select(\DB::raw('*,total_attendees/capacity as ratio'))->get();
        return response()->json([
            "status" => "success",
            "data" => compact("events")
        ], 200);
    }

    public function trendingEvents()
    {
        $trending = Event::select(\DB::raw('count(attendees.event_id) as nbrAttendees, events.id,
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
    public function getExpiredEvents()
    {
        $kTsp = now();
        echo $kTsp;
        // $expired_event=Event::where("date",">",)
    }
}
