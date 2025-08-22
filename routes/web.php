<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Test', []);
});
Route::get('/products', [ProductController::class, 'index'])->name('products.index');;
Route::get('/products/{url_key}', [ProductController::class, 'show'])->name('products.show');