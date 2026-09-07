<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * @property int $id
 * @property string $nom
 */
class Matiere extends Model
{
    protected $fillable = ['nom'];

    /** Cours de cette matière (1-n) — une matière peut avoir plusieurs cours */
    public function cours()
    {
        return $this->hasMany(Cours::class);
    }
}
