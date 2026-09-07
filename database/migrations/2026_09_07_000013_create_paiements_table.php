<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('paiements', function (Blueprint $table) {
            $table->id();
            $table->foreignId('achat_id')->unique()->constrained('achats')->cascadeOnDelete();
            $table->unsignedInteger('montant');
            $table->unsignedInteger('commission')->default(0);
            $table->unsignedInteger('revenu_createur')->default(0);
            $table->string('mode_paiement', 50)->nullable();
            $table->enum('statut', ['en_attente', 'complete', 'echoue', 'rembourse'])->default('en_attente');
            $table->string('reference', 100)->unique();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('paiements');
    }
};
