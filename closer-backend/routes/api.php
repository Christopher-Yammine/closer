<?php

use App\Http\Controllers\AttendeeController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::post('logout', [UserController::class, 'logout']);
Route::post('host', [UserController::class, 'makeHost']);
Route::get('topHosts', [UserController::class, 'topHosts']);

Route::get('event/{id}', [EventController::class, 'getEventById']);
Route::get('events/{id}', [EventController::class, 'getEventsByCat']);
Route::get('events', [EventController::class, 'getEvents']);
Route::post('event', [EventController::class, 'create']);
Route::get('trendingEvents', [EventController::class, 'trendingEvents']);
Route::post('file', [EventController::class, 'videoTransfer']);

Route::post('createCategory', [EventController::class, 'createCategory']);
Route::get('getAllCategories', [EventController::class, 'getAllCategories']);

Route::post('addAttendee/{event_id}', [AttendeeController::class, 'addAttendee']);
Route::post('attendeesByEvent/{event_id}', [AttendeeController::class, 'attendeesByEvent']);
