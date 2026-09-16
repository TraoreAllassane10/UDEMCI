<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Socialite\Socialite;



class OauthController extends Controller
{
    public function authenticated()
    {
        $user = Socialite::driver('google')->user();

        $user = User::updateOrCreate([
            'email' => $user->getEmail(),
        ], [
            'name' => $user->getName() ?? $user->getNickname(),
            'email' => $user->getEmail(),
            'password' => Hash::make(Str::random(32))
        ]);

        Auth::login($user);

        return redirect('/');
    }
}
