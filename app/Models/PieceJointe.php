<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $chapitre_id
 * @property string $nom_fichier
 * @property string $chemin_fichier
 * @property string|null $type_fichier
 */
class PieceJointe extends Model
{
    protected $fillable = [
        'chapitre_id',
        'nom_fichier',
        'chemin_fichier',
        'type_fichier',
    ];

    /** Chapitre auquel appartient ce fichier (n-1) */
    public function chapitre(): BelongsTo
    {
        return $this->belongsTo(Chapitre::class);
    }
}
