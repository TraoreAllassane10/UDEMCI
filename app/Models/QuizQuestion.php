<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property int $quiz_id
 * @property string $texte_question
 * @property int $ordre
 */
class QuizQuestion extends Model
{
    use HasUuids;
    protected $fillable = [
        'quiz_id',
        'texte_question',
        'ordre',
    ];


    /** Quiz parent */
    public function quiz(): BelongsTo
    {
        return $this->belongsTo(Quiz::class);
    }

    /** Options de réponse */
    public function options(): HasMany
    {
        return $this->hasMany(QuizOption::class);
    }

    /** Option correcte */
    public function optionCorrecte(): HasMany
    {
        return $this->hasMany(QuizOption::class)->where('is_correct', true);
    }
}
