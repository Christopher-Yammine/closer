<?php

namespace App\Http\Controllers;

use App\Constants\EventConstants;
use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
            'capacity' => 'required',
            'status' => 'required',
        ]);
        $data['user_id'] = Auth::id();
        
        $event=$this->model->create($data);

        return response()->json([
            "status"=>"success",
            "data"=>compact('event')
        ]);
    }

    public function get($id)
    {
        $event=$this->model->findOrFail($id);

        return response()->json([
            "status"=>"success",
            "event"=>compact('event')
        ]);
    }
}
