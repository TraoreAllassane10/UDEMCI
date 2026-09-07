<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use Laravel\Fortify\Contracts\PasskeyUser;
use Laravel\Fortify\PasskeyAuthenticatable;
use Laravel\Fortify\TwoFactorAuthenticatable;

/**
 * @property int $id
 * @property string $name
 * @property string $email
 * @property Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $phone
 * @property string|null $avatar
 * @property string $role  admin | eleve | createur
 * @property string $langue_pref
 * @property bool $is_active
 * @property string|null $two_factor_secret
 * @property string|null $two_factor_recovery_codes
 * @property Carbon|null $two_factor_confirmed_at
 * @property string|null $remember_token
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 */
#[Fillable(['name', 'email', 'password', 'phone', 'avatar', 'role', 'langue_pref', 'is_active'])]
#[Hidden(['password', 'two_factor_secret', 'two_factor_recovery_codes', 'remember_token'])]
class User extends Authenticatable implements PasskeyUser
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable, PasskeyAuthenticatable, TwoFactorAuthenticatable;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at'        => 'datetime',
            'password'                 => 'hashed',
            'two_factor_confirmed_at'  => 'datetime',
            'is_active'                => 'boolean',
        ];
    }


    public function isAdmin(): bool
    {
        return $this->role === 'admin';
    }

    public function isCreateur(): bool
    {
        return $this->role === 'createur';
    }

    public function isEleve(): bool
    {
        return $this->role === 'eleve';
    }



    /** Profil créateur */
    public function profilCreateur(): HasOne
    {
        return $this->hasOne(ProfilCreateur::class);
    }

    /** Avis laissés par cet utilisateur */
    public function avis(): HasMany
    {
        return $this->hasMany(Avis::class);
    }

    /** Achats de cours */
    public function achats(): HasMany
    {
        return $this->hasMany(Achat::class);
    }

    /** Progression par chapitre */
    public function progressions(): HasMany
    {
        return $this->hasMany(Progression::class);
    }

    /** Tentatives de quiz */
    public function tentatives(): HasMany
    {
        return $this->hasMany(Tentative::class);
    }

    /** Paramètres plateforme modifiés par cet admin  */
    public function parametresModifies(): HasMany
    {
        return $this->hasMany(ParametrePlateforme::class, 'modifie_par');
    }
}
