<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'date',
        'city',
        'category_id',
        'video_url',
        'cover_photo',
        'capacity',
        'user_id',
        'status',

    ];
}
