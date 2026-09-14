<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property int $cours_id
 * @property int $chapitre_id
 * @property string $titre
 */
class Quiz extends Model
{
    use HasUuids;
    protected $fillable = [
        'cours_id',
        'chapitre_id',
        'titre',
    ];

    /** Cours auquel appartient ce quiz */
    public function cours(): BelongsTo
    {
        return $this->belongsTo(Cours::class);
    }

    /** Chapitre auquel appartient ce quiz  */
    public function chapitre(): BelongsTo
    {
        return $this->belongsTo(Chapitre::class);
    }

    /** Questions du quiz */
    public function questions(): HasMany
    {
        return $this->hasMany(QuizQuestion::class);
    }

    /** Tentatives des élèves sur ce quiz */
    public function tentatives(): HasMany
    {
        return $this->hasMany(Tentative::class);
    }
}
