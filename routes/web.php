<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ExperimentController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Env;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->middleware(['guest'])->name('contact');
Route::get('/about', function () {
    return Inertia::render('About');
})->middleware(['guest'])->name('about');
Route::get('/experiments', function () {
    return Inertia::render('Experiments');
})->middleware(['auth']);

Route::get('/team', function () {
    return Inertia::render('Team');
})->middleware(['auth']);
Route::get('/projects', function () {
    return Inertia::render('Projects');
})->middleware(['auth']);
Route::get('/calender', function () {
    return Inertia::render('Calender');
})->middleware(['auth']);
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('/experiment-proxy', [ExperimentController::class, 'getExperimentUrl'])->middleware(['auth']);
Route::get('/admindashboard', [AdminController::class, 'index'])->middleware(['auth', 'admin']);

require __DIR__.'/auth.php';
