<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('quizzes', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('cours_id')->unique()->constrained('cours')->cascadeOnDelete();
            $table->foreignUuid('chapitre_id')->unique()->constrained('chapitres')->cascadeOnDelete();
            $table->string('titre');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('quizzes');
    }
};
