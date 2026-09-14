<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('progressions', function (Blueprint $table) {
             $table->uuid('id')->primary();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignUuid('chapitre_id')->constrained('chapitres')->cascadeOnDelete();
            $table->boolean('is_complete')->default(false);
            $table->unsignedInteger('temps_visionnage_secondes')->default(0);
            $table->timestamp('date_achevement')->nullable();
            $table->timestamps();

            $table->unique(['user_id', 'chapitre_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('progressions');
    }
};
