<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    // /**
    //  * Run the migrations.
    //  *
    //  * @return void
    //  */
    // public function up()
    // {
    //     Schema::table('attendees', function (Blueprint $table) {
    //         $table->foreign('user_id')->references('id')->on('users');
    //         $table->foreign('event_id')->references('id')->on('events');
    //     });
    // }

    // /**
    //  * Reverse the migrations.
    //  *
    //  * @return void
    //  */
    // public function down()
    // {
    //     Schema::table('attendees',function(Blueprint $table){
    //         $table->dropForeign('attendies_user_id_foreign');
    //         $table->dropForeign('attendies_event_id_foreign');

    //     });
        
    // }
};
