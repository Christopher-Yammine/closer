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



Route::get('trendingEvents', [EventController::class, 'trendingEvents']);
Route::get('event/{id}', [EventController::class, 'getEventById']);
Route::get('events/{id_cat}', [EventController::class, 'getEventsByCat']);
Route::get('events', [EventController::class, 'getEvents']);
Route::get('getAllCategories', [EventController::class, 'getAllCategories']);
Route::get('getExpiredEvents', [EventController::class, 'getExpiredEvents']);

Route::get('attendeesByEvent/{event_id}', [AttendeeController::class, 'attendeesByEvent']);

Route::group(['prefix' => 'host'], function () {
    Route::group(['middleware' => 'host.role'], function () {
        Route::post('event', [EventController::class, 'create']);
        Route::post('file', [EventController::class, 'videoTransfer']);
    });
});

Route:
Route::group(['prefix' => 'admin'], function () {
    Route::group(['middleware' => 'admin.role'], function () {
        Route::post('createCategory', [UserController::class, 'createCategory']);
        Route::get('usersCount', [UserController::class, 'getUsertypesCount']);
    });
});

Route::group(['middleware' => 'user.role'], function () {
    Route::post('addAttendee/{event_id}', [AttendeeController::class, 'addAttendee']);
});
