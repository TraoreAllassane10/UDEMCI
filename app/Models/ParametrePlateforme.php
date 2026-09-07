<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property float $taux_commission  pourcentage ex: 20.00
 * @property string $devis           ex: XOF, EUR
 * @property int|null $modifie_par   FK user (admin)
 */
class ParametrePlateforme extends Model
{
    protected $fillable = [
        'taux_commission',
        'devis',
        'modifie_par',
    ];

    protected function casts(): array
    {
        return [
            'taux_commission' => 'decimal:2',
        ];
    }

    /** Administrateur qui a modifié ce paramètre (n-1) */
    public function administrateur(): BelongsTo
    {
        return $this->belongsTo(User::class, 'modifie_par');
    }
}
