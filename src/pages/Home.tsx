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
    <section
      className="pt-24 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto transition-all"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        fontFamily: "var(--font)",
      }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Welcome to the Home Page
      </h1>

      <p className="text-lg sm:text-xl mb-6 leading-relaxed">
        Explore a few products fetched from the Fake Store API.
      </p>

      <button className="btn hover:opacity-90 active:scale-95">
        Click Me
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {products.map((item) => (
          <div
            key={item.id}
            className="card rounded-xl p-5 shadow-md hover:shadow-lg transition-all"
          >
            {/* Fix white background image issue */}
            <div className="p-3 rounded-md" style={{ backgroundColor: "var(--card-bg)" }}>
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-contain mx-auto border border-gray-300 dark:border-gray-700 rounded"
              />
            </div>

            <h2 className="text-lg font-semibold mt-4 mb-2">{item.title}</h2>
            <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
              ₹{item.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
