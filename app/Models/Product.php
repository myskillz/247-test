<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_name',
        'url_key',
        'list_image',
        'thumbnail',
        'discount_additional',
    ];

    public function labels(): HasMany
    {
        return $this->hasMany(ProductLabel::class);
    }
}
