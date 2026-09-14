<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $achat_id
 * @property float $montant
 * @property float $commission
 * @property float $revenu_createur
 * @property string|null $mode_paiement
 * @property string $statut  en_attente | complete | echoue | rembourse
 * @property string|null $reference
 */
class Paiement extends Model
{
    use HasUuids;
    
    protected $fillable = [
        'achat_id',
        'montant',
        'commission',
        'revenu_createur',
        'mode_paiement',
        'statut',
        'reference',
    ];

    protected function casts(): array
    {
        return [
            'montant'          => 'decimal:2',
            'commission'       => 'decimal:2',
            'revenu_createur'  => 'decimal:2',
        ];
    }

    /** Achat lié (1-1 inverse) */
    public function achat(): BelongsTo
    {
        return $this->belongsTo(Achat::class);
    }
}
