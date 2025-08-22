<?php
namespace App\Http\Controllers;
use Inertia\Inertia; 
use App\Models\Product;

class ProductController extends Controller
{
    private const FALLBACK_PRODUCT_NAME = 'Product info coming soon';

    public function __construct()
    {
        //Middleware can be added here if needed e.g. saleforce, event tracking, etc.
    }

    /**
     * Display a listing of the products.
     *
     * @return \Inertia\Response
     */
    public function index()
    { 
        //Initial
        $return_arr = []; 

        //Get all products
        $products = Product::all();  //Q: archive/active/status (soft delete) is an option. 
        //dd($products);

        if($products->isNotEmpty()) 
        {
            foreach($products as $counter => $product)
            {
                $return_arr[] = [ 
                    'name'      => $product->product_name? $product->product_name:self::FALLBACK_PRODUCT_NAME,
                    'url'       => route('products.show', ['url_key' => $product->url_key]),
                    'thumbnail' => $this->get_product_thumbnail($product),
                    'labels'    => $product->labels->pluck('label')->sort()->values()->toArray(),
                    'count'     => $counter + 1
                ];
            } 
        } //dd($return_arr);
        return Inertia::render("Products/Index",array("prods"=>$return_arr));
    }

    /**
     * Show product details by URL key
     * @param string $url_key
     * @return \Inertia\Response
     */
    public function show($url_key)
    { 
        //Initial
        $return_arr = []; 

        //Validate that $url_key contains only letters and numbers
        if (!preg_match('/^[a-zA-Z0-9-]+$/', $url_key)) 
            abort(404); //Q: perfer a 'proudct not found' page
        
        $product = Product::where('url_key', $url_key)->first();
        
        if(!$product)
            abort(404); //Q: perfer a 'proudct not found' page

        $return_arr=[
            'name'      => $product->product_name?$product->product_name:self::FALLBACK_PRODUCT_NAME,
            'url'       => route('products.show', ['url_key' => $product->url_key]),
            'thumbnail' => $this->get_product_thumbnail($product), 
            'labels'    => $product->labels->pluck('label')->sort()->values()->toArray(),
        ];
        return \Inertia\Inertia::render("Products/Show",array("prod"=>$return_arr)); 
    }

    /**
     * Get product thumbnail or default image URL
     * @param Product $product
     * @return string
     */
    private function get_product_thumbnail($product)
    {
        if($product->thumbnail) 
            return $product->thumbnail;
        
        return config('app.default_img_url');
    }
}
 