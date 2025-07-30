import React, { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data.slice(0, 4));
    });
  }, []);

  return (
    <section className="pt-24 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Explore a few products fetched from Fake Store API.
      </p>

      <button className="btn hover:opacity-90 active:scale-95">
        Click Me
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
        {products.map((item) => (
          <div
            key={item.id}
            className="card rounded-xl p-5 shadow-md hover:shadow-lg transition-all"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              ₹{item.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
