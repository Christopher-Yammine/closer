<?php

namespace App\Http\Controllers;

use App\Constants\UserConstants;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Category;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register', 'makeHost', 'topHosts', 'createCategory']]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('username', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        return response()->json([
            'status' => 'success',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function register(Request $request)
    {
        $data = $request->validate([
            'username' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:6',
            'first_name' => 'required',
            'last_name' => 'required',
            'gender' => 'required',
            'profile_picture' => 'required',
        ]);

        $user = User::create([
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'gender' => $request->gender,
            'profile_picture' => $request->profile_picture,
        ]);

        $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ], 200);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ], 200);
    }

    public function makeHost(Request $request)
    {
        $data = $request->validate([
            'username' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:6',
            'first_name' => 'required',
            'last_name' => 'required',
            'gender' => 'required',
            'profile_picture' => 'required',
        ]);


        $user = User::create([
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'gender' => $request->gender,
            'profile_picture' => $request->profile_picture,
            'type' => UserConstants::HOST
        ]);

        $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'message' => 'host created successfully',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ], 200);
    }

    public function topHosts()
    {
        $top_host = User::select(\DB::raw('count(events.id) as nbrEvents,sum(total_attendees) as Total,
        events.user_id,users.first_name, users.last_name,users.profile_picture,categories.name as cat_name'))

            ->join('events', 'events.user_id', '=', 'users.id')
            ->join('categories', 'categories.id', '=', 'events.category_id')
            ->where('type', 'host')
            ->orderBy('nbrEvents', 'DESC')
            ->groupBy(['user_id', 'users.first_name', 'users.last_name', 'users.profile_picture', 'categories.name'])
            ->get();

        return response()->json([
            "status" => "success",
            "data" => compact("top_host")
        ]);
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
    public function getUsertypesCount()
    {
        $user_count = User::where("type", "user")->where("type", "host")->get();

        return response()->json([
            "status" => "success",
            "user_count" => compact("user_count")
        ]);
    }
}
