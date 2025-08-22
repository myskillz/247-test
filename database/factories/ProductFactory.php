<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_name' => fake()->words(3, true),
            'url_key' => fake()->unique()->slug(),
            'list_image' => fn(array $attr) =>
                "https://placehold.co/400x300?text=Product+" . ($attr['id'] ?? fake()->randomNumber()),
            'thumbnail' => fn(array $attr) =>
                "https://placehold.co/200x150?text=Thumb+" . ($attr['id'] ?? fake()->randomNumber()),
            'discount_additional' => fake()->randomFloat(2, 0, 20),
        ];
    }
}
