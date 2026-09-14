<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('reponse_tentatives', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('tentative_id')->constrained('tentatives')->cascadeOnDelete();
            $table->foreignUuid('quiz_question_id')->constrained('quiz_questions')->cascadeOnDelete();
            $table->foreignUuid('quiz_option_id')->constrained('quiz_options')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('reponse_tentatives');
    }
};
