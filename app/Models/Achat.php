<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $user_id
 * @property int $cours_id
 * @property int $somme_payee
 * @property Carbon $date_paiement
 */
class Achat extends Model
{
    use HasUuids;
    protected $fillable = [
        'user_id',
        'cours_id',
        'somme_payee',
        'date_paiement',
    ];

    protected function casts(): array
    {
        return [
            'somme_payee'   => 'integer',
            'date_paiement' => 'datetime',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function cours(): BelongsTo
    {
        return $this->belongsTo(Cours::class);
    }

    public function paiement(): HasOne
    {
        return $this->hasOne(Paiement::class);
    }
}
