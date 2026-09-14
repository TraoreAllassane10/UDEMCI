<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('cours', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('profil_createur_id')->constrained('profil_createurs')->cascadeOnDelete();
            $table->foreignUuid('matiere_id')->constrained('matieres')->cascadeOnDelete();
            $table->string('titre');
            $table->string('slug')->unique();
            $table->text('description');
            $table->string('langue', 10)->default('fr');
            $table->string('miniature')->nullable();
            $table->boolean('is_promotion')->default(false);
            $table->unsignedInteger('prix')->default(0);
            $table->unsignedInteger('prix_promotion')->nullable();
            $table->decimal('note_moyenne', 3, 2)->nullable();
            $table->enum('statut', ['brouillon', 'publie', 'archive'])->default('brouillon');
            $table->timestamp('date_publication')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cours');
    }
};
