<?php

use App\Constants\EventConstants;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->dateTime('date');
            $table->string('city');
            $table->integer('category_id');
            $table->string('video_url');
            $table->mediumText('cover_photo');
            $table->integer('capacity');
            $table->integer('user_id');
            $table->string('status')->default(EventConstants::UPCOMING);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
};
