<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('cours_niveau', function (Blueprint $table) {
            $table->foreignUuid('cours_id')->constrained('cours')->cascadeOnDelete();
            $table->foreignUuid('niveau_id')->constrained('niveaux')->cascadeOnDelete();
            $table->primary(['cours_id', 'niveau_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cours_niveau');
    }
};
