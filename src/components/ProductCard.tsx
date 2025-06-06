"use client";

import Image from "next/image";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="flex flex-col border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 bg-white max-w-xs mx-auto">
      <div className="relative w-full h-48 overflow-hidden rounded-lg group">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 150px"
          className="object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
          priority={true}
        />
      </div>

      <h3 className="text-lg font-semibold mt-4 line-clamp-2">{product.name}</h3>
      <p className="text-gray-500 text-sm mt-1 capitalize">{product.category}</p>
      <p className="text-pink-600 font-bold text-xl mt-2">${product.price.toFixed(2)}</p>

      <button
        className="cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md mt-4 transition-all duration-300"
        onClick={() => alert(`Added ${product.name} to cart!`)}
      >
        Add to Cart
      </button>
    </div>
  );
}
