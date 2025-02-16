
import React from "react";
import { productData } from "../../public/Data/data.js";
const FeaturedProduct = () => {
  return (
    <div className="container mx-auto pt-16 px-4">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
        <div>
          <h3 className="font-semibold text-3xl">Featured Products</h3>
          <p className="text-gray-600 mt-2">
            Discover the latest trends with our premium quality outfits.
          </p>
        </div>
        <div className="mt-6 lg:mt-0">
          <a
            href="/shop"
            className="bg-black text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-800 transition"
          >
            View All
          </a>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productData.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 border rounded-lg hover:shadow-xl transition"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-60 object-contain rounded-md"
            />
            <h4 className="font-medium text-lg mt-4">{product.name}</h4>
            <p className="text-gray-500">In Stock: {product.count}</p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
