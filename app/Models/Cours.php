<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $profil_createur_id
 * @property int $matiere_id
 * @property string $titre
 * @property string $slug
 * @property string $description
 * @property string $langue
 * @property string|null $miniature
 * @property bool $is_promotion
 * @property int $prix
 * @property int|null $prix_promotion
 * @property float|null $note_moyenne
 * @property string $statut  brouillon | publie | archive
 * @property Carbon|null $date_publication
 */
class Cours extends Model
{
    protected $fillable = [
        'profil_createur_id',
        'matiere_id',
        'titre',
        'slug',
        'description',
        'langue',
        'miniature',
        'is_promotion',
        'prix',
        'prix_promotion',
        'note_moyenne',
        'statut',
        'date_publication',
    ];

    protected function casts(): array
    {
        return [
            'is_promotion'     => 'boolean',
            'prix'             => 'integer',
            'prix_promotion'   => 'integer',
            'note_moyenne'     => 'decimal:2',
            'date_publication' => 'datetime',
        ];
    }


    /** Créateur du cours (n-1) */
    public function profilCreateur(): BelongsTo
    {
        return $this->belongsTo(ProfilCreateur::class);
    }

    /** Matière du cours (n-1) — un cours appartient à une seule matière */
    public function matiere(): BelongsTo
    {
        return $this->belongsTo(Matiere::class);
    }

    /** Chapitres du cours (1-n) */
    public function chapitres(): HasMany
    {
        return $this->hasMany(Chapitre::class)->orderBy('ordre');
    }

    /** Avis sur ce cours (1-n) */
    public function avis(): HasMany
    {
        return $this->hasMany(Avis::class);
    }

    /** Achats de ce cours (1-n) */
    public function achats(): HasMany
    {
        return $this->hasMany(Achat::class);
    }

    /** Niveaux associés (n-n) */
    public function niveaux(): BelongsToMany
    {
        return $this->belongsToMany(Niveau::class, 'cours_niveau');
    }
}
