<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * @property int $id
 * @property int $cours_id
 * @property string $titre
 * @property string|null $video_path
 * @property string|null $miniature
 * @property int $duration_seconds
 * @property int $ordre
 */
class Chapitre extends Model
{
    use HasUuids;
    protected $fillable = [
        'cours_id',
        'titre',
        'video_path',
        'miniature',
        'duration_seconds',
        'ordre',
    ];

    protected function casts(): array
    {
        return [
            'duration_seconds' => 'integer',
            'ordre'            => 'integer',
        ];
    }


    public function cours(): BelongsTo
    {
        return $this->belongsTo(Cours::class);
    }

    public function pieceJointes(): HasMany
    {
        return $this->hasMany(PieceJointe::class);
    }

    public function quiz(): HasOne
    {
        return $this->hasOne(Quiz::class);
    }

    public function progressions(): HasMany
    {
        return $this->hasMany(Progression::class);
    }
}
