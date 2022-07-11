<?php

namespace App\Http\Controllers;

use App\Models\Attendee;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AttendeeController extends Controller
{

    private $model;

    public function __construct()
    {

        $this->model = new Attendee();
    }
    public function addAttendee(Request $request, $event_id)
    {
        $event = new Event();
        $capacity = Event::where('id', '=', $event_id)
            ->get("capacity")[0]["capacity"];
        $userExist = $this->model
            ->where('event_id', '=', $event_id)
            ->where('user_id', '=', Auth::id())->count();
        $count = $this->model
            ->where('event_id', '=', $event_id)->count();

        if ($userExist >= 1) {
            return response()->json([
                "status" => "failed",
                "data" => "user exists"
            ], 200);
        } else {
            if ($capacity > $count) {
                $data['event_id'] = $event_id;
                $data['user_id'] = Auth::id();
                $attendee = $this->model->create($data);
                return response()->json([
                    "status" => "success",
                    "data" => compact('attendee')
                ], 200);
            } else {
                return response()->json([
                    "status" => "failed",
                    "data" => "exceeded event capacity"
                ], 200);
            }
        }
    }


    public function attendeesByEvent($event_id)
    {
        $all_attendees = $this->model
            ->join('users', 'users.id', '=', 'attendees.user_id')
            ->where('attendees.event_id', '=', $event_id)
            ->get(['users.first_name', 'users.profile_picture']);
        $attendees_count = $all_attendees->count();
        return response()->json([
            "status" => "success",
            "data" => compact('all_attendees'),
            "count" => compact('attendees_count')
        ], 200);
    }
}
