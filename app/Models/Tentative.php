<?php

namespace App\Models;

use Illuminate\Support\Carbon;
use App\Models\ReponseTentative;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $user_id
 * @property int $quiz_id
 * @property float $score  pourcentage 0-100
 * @property Carbon $date_tentative
 */
class Tentative extends Model
{
    protected $fillable = [
        'user_id',
        'quiz_id',
        'score',
        'date_tentative',
    ];

    protected function casts(): array
    {
        return [
            'score'          => 'decimal:2',
            'date_tentative' => 'datetime',
        ];
    }


    /** Élève) */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /** Quiz tenté */
    public function quiz(): BelongsTo
    {
        return $this->belongsTo(Quiz::class);
    }

    /** Réponses choisies dans cette tentative*/
    public function reponses(): HasMany
    {
        return $this->hasMany(ReponseTentative::class);
    }
}
