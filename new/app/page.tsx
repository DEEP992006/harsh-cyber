"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingBag, Loader2 } from "lucide-react";
import Image from "next/image";

function HomeContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-[100dvh] bg-gray-50">
      {/* Mobile App Header */}
      <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-xl border-b border-gray-200/80 shadow-sm safe-top">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-600/20">
                <span className="text-white font-bold text-base">T</span>
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">TechStore</span>
            </div>
            <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-full hover:bg-gray-100">
              <ShoppingBag className="h-5 w-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-blue-600 text-white text-[10px] font-semibold rounded-full flex items-center justify-center shadow-md">
                3
              </span>
            </Button>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-gray-400" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 h-12 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
            />
          </div>
        </div>
      </header>

      {/* Hero Banner - Mobile Optimized */}
      <section className="relative overflow-hidden">
        <div className="relative h-48 sm:h-60 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&h=400&fit=crop"
              alt="Tech background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative h-full flex flex-col justify-center px-5">
            <span className="inline-flex w-fit px-3.5 py-1.5 bg-white/25 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-2.5 border border-white/20">
              🔥 Flash Sale
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Up to 50% Off
            </h1>
            <p className="text-blue-50 text-sm mt-2 font-medium">Premium tech deals</p>
          </div>
        </div>
      </section>

      {/* Category Pills - Horizontal Scroll */}
      <section className="sticky top-[116px] sm:top-[124px] z-40 bg-white/98 backdrop-blur-xl border-b border-gray-200/80">
        <div className="flex gap-2.5 px-4 py-3.5 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all active:scale-95 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="p-4 pb-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">
            {selectedCategory === "All" ? "All Products" : selectedCategory}
          </h2>
          <span className="text-sm font-medium text-gray-500">{filteredProducts.length} items</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No products found</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={
      <div className="min-h-[100dvh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}
