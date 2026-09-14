<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('catalogue', 'catalogue/index')->name('catalogue');
Route::inertia('catalogue/show', 'catalogue/show')->name('catalogue.show');
Route::inertia('catalogue/checkout', 'paiement/index')->name('paiement.index');

Route::inertia('catalogue/lecture-player', 'catalogue/lecture-player')->name('catalogue.lecture-player');
Route::inertia('catalogue/quiz', 'catalogue/quiz')->name('catalogue.quiz');


Route::inertia('createur/creer-cours-etape1', 'createur/creer-cours-etape1')->name('createur.creer-cours-etape1');
Route::inertia('createur/creer-cours-etape2', 'createur/creer-cours-etape2')->name('createur.creer-cours-etape2');
Route::inertia('createur/creer-cours-etape3', 'createur/creer-cours-etape3')->name('createur.creer-cours-etape3');
Route::inertia('createur/creer-cours-etape4', 'createur/creer-cours-etape4')->name('createur.creer-cours-etape4');
Route::inertia('createur/liste-cours', 'createur/liste-cours')->name('createur.liste-cours');


Route::inertia('admin/liste-cours', 'admin/liste-cours')->name('admin.liste-cours');
Route::inertia('admin/utilisateurs', 'admin/utilisateurs')->name('admin.utilisateurs');
Route::inertia('admin/rapport-financier', 'admin/rapport-financier')->name('admin.rapport-financier');

Route::inertia('parametre-compte', 'parametre-compte')->name('parametre-compte');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::middleware('eleve')->group(function () {
        Route::inertia('eleve/dashboard', 'catalogue/mes-cours')->name('eleve.dashboard');
    });

    Route::middleware('createur')->group(function () {
        Route::inertia('createur/dashboard', 'createur/dashboard')->name('createur.dashboard');
    });

    Route::middleware('admin')->group(function () {
        Route::inertia('admin/dashboard', 'admin/dashboard')->name('admin.dashboard');
    });
});

require __DIR__ . '/settings.php';
