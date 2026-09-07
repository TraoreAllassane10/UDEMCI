<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property int $quiz_question_id
 * @property string $texte_option
 * @property bool $is_correct
 */
class QuizOption extends Model
{
    protected $fillable = [
        'quiz_question_id',
        'texte_option',
        'is_correct',
    ];

    protected function casts(): array
    {
        return [
            'is_correct' => 'boolean',
        ];
    }

    /** Question parente */
    public function question(): BelongsTo
    {
        return $this->belongsTo(QuizQuestion::class, 'quiz_question_id');
    }

    /** Réponses choisies dans les tentatives */
    public function reponsesTentatives(): HasMany
    {
        return $this->hasMany(ReponseTentative::class);
    }
}
