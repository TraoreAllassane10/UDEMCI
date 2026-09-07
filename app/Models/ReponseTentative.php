<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property int $tentative_id
 * @property int $quiz_question_id
 * @property int $quiz_option_id
 */
class ReponseTentative extends Model
{
    protected $fillable = [
        'tentative_id',
        'quiz_question_id',
        'quiz_option_id',
    ];

    /** Tentative parente */
    public function tentative(): BelongsTo
    {
        return $this->belongsTo(Tentative::class);
    }

    /** Question concernée */
    public function question(): BelongsTo
    {
        return $this->belongsTo(QuizQuestion::class, 'quiz_question_id');
    }

    /** Option choisie */
    public function option(): BelongsTo
    {
        return $this->belongsTo(QuizOption::class, 'quiz_option_id');
    }
}
