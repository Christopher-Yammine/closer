<?php

namespace App\Http\Controllers;

use App\Models\Attendee;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AttendeeController extends Controller
{

    public function addAttendee(Request $request, $event_id)
    {

        $event = Event::find($event_id);
        $capacity = $event->capacity;
        $userExist = Attendee::where('event_id', $event_id)
            ->where('user_id', Auth::id())->count();
        $countEvents = Attendee::where('event_id', $event_id)->count();
        if ($userExist >= 1) {
            return response()->json([
                "status" => "failed",
                "data" => "You already reserved"
            ], 200);
        } else {
            if ($capacity > $countEvents) {
                $data['event_id'] = $event_id;
                $data['user_id'] = Auth::id();
                $attendee = Attendee::create($data);
                $event->total_attendees = $event->total_attendees + 1;
                $event->save();
                return response()->json([
                    "status" => "success",
                    "data" => "Reserved successfully"
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
        $all_attendees = Attendee::join('users', 'users.id', '=', 'attendees.user_id')
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
