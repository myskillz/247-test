<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductLabel extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'label',
    ];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
