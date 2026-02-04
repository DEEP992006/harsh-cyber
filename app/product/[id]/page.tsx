"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductById, products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/product-card";
import {
  Star,
  Truck,
  ShieldCheck,
  ArrowLeft,
  Heart,
  Share2,
  Check,
} from "lucide-react";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const product = getProductById(id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-[80dvh] flex flex-col items-center justify-center p-6">
        <h1 className="text-xl font-bold text-gray-900">Product not found</h1>
        <Link href="/">
          <Button className="mt-4">Back to Home</Button>
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleBuyNow = () => {
    router.push(`/checkout?productId=${product.id}&quantity=1`);
  };

  return (
    <div className="min-h-[100dvh] bg-white pb-24">
      {/* Mobile App Header */}
      <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-xl border-b border-gray-200/80 px-4 py-4 flex items-center justify-between shadow-sm">
        <Link href="/" className="p-2 -ml-2 hover:bg-gray-100 rounded-full active:scale-95 transition-all">
          <ArrowLeft className="h-5 w-5 text-gray-700" />
        </Link>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-gray-100">
            <Heart className="h-5 w-5 text-gray-700" />
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-gray-100">
            <Share2 className="h-5 w-5 text-gray-700" />
          </Button>
        </div>
      </header>

      {/* Product Images - Full Width Swipeable */}
      <div className="relative">
        <div className="aspect-square bg-gray-50 relative overflow-hidden">
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          {discount > 0 && (
            <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-500 text-white font-semibold px-3 py-1">
              -{discount}%
            </Badge>
          )}
        </div>
        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {product.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`h-2 rounded-full transition-all ${
                selectedImage === idx ? "w-6 bg-blue-600" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide border-b">
        {product.images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`relative h-16 w-16 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all active:scale-95 ${
              selectedImage === idx
                ? "border-blue-600"
                : "border-gray-200"
            }`}
          >
            <Image
              src={img}
              alt={`${product.name} ${idx + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Product Info */}
      <div className="px-4 py-5 space-y-5">
        {/* Category & Stock */}
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 text-xs font-semibold px-2.5 py-1">
            {product.category}
          </Badge>
          {product.inStock && (
            <Badge className="bg-green-50 text-green-700 hover:bg-green-50 text-xs font-semibold px-2.5 py-1 border border-green-200">
              <Check className="h-3 w-3 mr-1" /> In Stock
            </Badge>
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 leading-tight tracking-tight">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="font-semibold text-sm text-gray-900">{product.rating}</span>
          <span className="text-sm text-gray-500">({product.reviews.toLocaleString()} reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2.5">
          <span className="text-3xl font-extrabold text-gray-900 tracking-tight">
            ₹{product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <>
              <span className="text-lg text-gray-400 line-through font-medium">
                ₹{product.originalPrice.toLocaleString()}
              </span>
              <Badge className="bg-red-50 text-red-600 hover:bg-red-50 text-xs font-semibold px-2.5 py-1 border border-red-200">
                Save ₹{(product.originalPrice - product.price).toLocaleString()}
              </Badge>
            </>
          )}
        </div>

        {/* Description */}
        <div className="pt-3 pb-1">
          <h3 className="font-bold text-gray-900 mb-2.5 text-base">About this product</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
        </div>

        {/* Features */}
        <div className="pt-3 pb-1">
          <h3 className="font-bold text-gray-900 mb-3 text-base">Key Features</h3>
          <div className="grid grid-cols-1 gap-2.5">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed">
                <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 gap-3 pt-4">
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-blue-50 border border-blue-100">
            <Truck className="h-5 w-5 text-blue-600 flex-shrink-0" />
            <div>
              <span className="text-xs font-semibold text-gray-900 block">Free Shipping</span>
              <span className="text-xs text-gray-600">Orders ₹5000+</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-blue-50 border border-blue-100">
            <ShieldCheck className="h-5 w-5 text-blue-600 flex-shrink-0" />
            <div>
              <span className="text-xs font-semibold text-gray-900 block">2 Year Warranty</span>
              <span className="text-xs text-gray-600">Full coverage</span>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-6 pb-2">
            <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">You may also like</h2>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
              {relatedProducts.map((p) => (
                <div key={p.id} className="flex-shrink-0 w-40">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fixed Bottom Bar with Padding */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/98 backdrop-blur-xl border-t border-gray-200/80 px-4 py-4 pb-safe shadow-lg z-50">
        <div className="max-w-md mx-auto">
          {/* Buy Now Button */}
          <Button
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white h-14 text-lg font-bold rounded-xl active:scale-[0.98] transition-all shadow-lg shadow-blue-600/25"
            onClick={handleBuyNow}
          >
            Buy Now · ₹{product.price.toLocaleString()}
          </Button>
        </div>
      </div>
    </div>
  );
}
