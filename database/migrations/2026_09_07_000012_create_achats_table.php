<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('achats', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignUuid('cours_id')->constrained('cours')->cascadeOnDelete();
            $table->unsignedInteger('somme_payee');
            $table->timestamp('date_paiement');
            $table->timestamps();

            $table->unique(['user_id', 'cours_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('achats');
    }
};
