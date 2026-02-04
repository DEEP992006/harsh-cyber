export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Sony WH-1000XM5 Wireless Headphones",
    description: "Industry-leading noise cancellation with 8 microphones for unprecedented clarity. 30-hour battery life and multipoint connection. Premium sound quality with LDAC support.",
    price: 2999,
    originalPrice: 9999,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop"
    ],
    category: "Audio",
    rating: 4.8,
    reviews: 12467,
    inStock: true,
    features: [
      "Industry-leading noise cancellation",
      "30-hour battery life",
      "Multipoint connection",
      "Superior call quality",
      "Premium comfort design"
    ]
  },
  {
    id: "2",
    name: "Apple iPhone 15 Pro Max 256GB",
    description: "A17 Pro chip with 6-core GPU. Titanium design with Action button. 48MP Main camera with 5x optical zoom. USB-C with USB 3 speeds.",
    price: 39999,
    originalPrice: 134900,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&h=600&fit=crop"
    ],
    category: "Phones",
    rating: 4.9,
    reviews: 5123,
    inStock: true,
    features: [
      "A17 Pro chip",
      "Titanium design",
      "48MP camera system",
      "Action button",
      "USB-C connectivity"
    ]
  },
  {
    id: "3",
    name: "MacBook Pro 14\" M3 Pro",
    description: "The most advanced Mac laptops ever. Supercharged by M3 Pro and M3 Max chips. With industry-leading battery life, stunningly brilliant display, and all the ports you need.",
    price: 59999,
    originalPrice: 182000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=600&fit=crop"
    ],
    category: "Laptops",
    rating: 4.9,
    reviews: 1892,
    inStock: true,
    features: [
      "Apple M3 Pro chip",
      "18-hour battery life",
      "Liquid Retina XDR display",
      "18GB unified memory",
      "512GB SSD storage"
    ]
  },
  {
    id: "4",
    name: "Samsung 65\" OLED 4K Smart TV",
    description: "Experience true blacks and infinite contrast with OLED technology. Neural Quantum Processor 4K delivers stunning picture quality. Dolby Atmos and Object Tracking Sound.",
    price: 69999,
    originalPrice: 232000,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=600&h=600&fit=crop"
    ],
    category: "TVs",
    rating: 4.7,
    reviews: 934,
    inStock: true,
    features: [
      "OLED display technology",
      "4K resolution",
      "Neural Quantum Processor",
      "Dolby Atmos sound",
      "Smart TV features"
    ]
  },
  {
    id: "5",
    name: "DJI Mini 4 Pro Drone",
    description: "Weighing less than 249g, the DJI Mini 4 Pro is a lightweight drone that shoots 4K/60fps video. Features omnidirectional obstacle sensing and 34-min max flight time.",
    price: 24999,
    originalPrice: 63000,
    image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524143986875-3b098d78b363?w=600&h=600&fit=crop"
    ],
    category: "Drones",
    rating: 4.8,
    reviews: 1256,
    inStock: true,
    features: [
      "Under 249g weight",
      "4K/60fps video",
      "Omnidirectional sensing",
      "34-min flight time",
      "ActiveTrack 360°"
    ]
  },
  {
    id: "6",
    name: "Apple Watch Ultra 2",
    description: "The most rugged and capable Apple Watch. With precision dual-frequency GPS, up to 36 hours of battery life, and 100m water resistance.",
    price: 26999,
    originalPrice: 66000,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=600&h=600&fit=crop"
    ],
    category: "Wearables",
    rating: 4.8,
    reviews: 2341,
    inStock: true,
    features: [
      "49mm titanium case",
      "36-hour battery life",
      "100m water resistance",
      "Precision dual-frequency GPS",
      "S9 SiP chip"
    ]
  },
  {
    id: "7",
    name: "PlayStation 5 Console",
    description: "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with haptic feedback, and a new generation of incredible PlayStation games.",
    price: 16999,
    originalPrice: 54990,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=600&h=600&fit=crop"
    ],
    category: "Gaming",
    rating: 4.9,
    reviews: 8721,
    inStock: true,
    features: [
      "Custom AMD GPU",
      "825GB SSD",
      "Ray tracing support",
      "4K gaming at 120fps",
      "DualSense controller"
    ]
  },
  {
    id: "8",
    name: "Canon EOS R6 Mark II",
    description: "Full-frame mirrorless camera with 24.2MP sensor. Up to 40fps continuous shooting. In-body image stabilization up to 8 stops. 4K 60p video recording.",
    price: 74999,
    originalPrice: 224000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=600&h=600&fit=crop"
    ],
    category: "Cameras",
    rating: 4.8,
    reviews: 567,
    inStock: true,
    features: [
      "24.2MP full-frame sensor",
      "40fps continuous shooting",
      "8-stop image stabilization",
      "4K 60p video",
      "Dual Pixel CMOS AF II"
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const categories = ["All", "Audio", "Phones", "Laptops", "TVs", "Drones", "Wearables", "Gaming", "Cameras"];
