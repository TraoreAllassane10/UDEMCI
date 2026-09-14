<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('parametre_plateformes', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->decimal('taux_commission', 5, 2)->default(5);
            $table->string('devis', 10)->default('XOF');
            $table->foreignId('modifie_par')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('parametre_plateformes');
    }
};
