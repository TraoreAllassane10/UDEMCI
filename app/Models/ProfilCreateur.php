<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property int $user_id
 * @property string|null $bio
 * @property string|null $methode_paiement
 * @property string|null $numero_paiement
 */
class ProfilCreateur extends Model
{
    use HasUuids;
    protected $fillable = [
        'user_id',
        'bio',
        'methode_paiement',
        'numero_paiement',
    ];

    /** Utilisateur propriétaire de ce profil */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /** Cours créés par ce profil */
    public function cours(): HasMany
    {
        return $this->hasMany(Cours::class);
    }
}
