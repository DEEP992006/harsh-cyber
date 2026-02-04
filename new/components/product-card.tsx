"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200">
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {discount > 0 && (
            <Badge className="absolute top-2.5 left-2.5 bg-red-500 hover:bg-red-500 text-white text-[11px] font-bold px-2.5 py-1 shadow-lg">
              -{discount}%
            </Badge>
          )}
        </div>
        <div className="p-3.5">
          <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 min-h-[40px] leading-snug">
            {product.name}
          </h3>
          <div className="flex items-center gap-1.5 mt-2">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-semibold text-gray-700">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviews > 1000 ? `${(product.reviews/1000).toFixed(1)}k` : product.reviews})</span>
          </div>
          <div className="flex items-baseline gap-2 mt-2.5">
            <span className="text-base font-extrabold text-gray-900">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through font-medium">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
