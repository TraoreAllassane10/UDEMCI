<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $user_id
 * @property int $chapitre_id
 * @property bool $is_complete
 * @property int $temps_visionnage_secondes
 * @property Carbon|null $date_achevement
 */
class Progression extends Model
{
    use HasUuids;
    protected $fillable = [
        'user_id',
        'chapitre_id',
        'is_complete',
        'temps_visionnage_secondes',
        'date_achevement',
    ];

    protected function casts(): array
    {
        return [
            'is_complete'               => 'boolean',
            'temps_visionnage_secondes' => 'integer',
            'date_achevement'           => 'datetime',
        ];
    }


    /** Élève */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /** Chapitre suivi */
    public function chapitre(): BelongsTo
    {
        return $this->belongsTo(Chapitre::class);
    }
}
