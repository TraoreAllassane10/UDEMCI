<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * @property int $id
 * @property string $nom
 */
class Niveau extends Model
{
    protected $fillable = ['nom'];

    /** Cours ayant ce niveau (n-n) */
    public function cours(): BelongsToMany
    {
        return $this->belongsToMany(Cours::class, 'cours_niveau');
    }
}
