"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";

type Product = {
  id: string;
  name: string;
  description: string | null;
  image: string;
  price: number;
  slug: string;
};

export default function Catalogo({ products }: { products?: Product[] }) {
  // 🟡 SKELETON LOADING
  if (!products || products.length === 0) {
    return (
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "2rem",
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </section>
    );
  }

  // 🟢 CATÁLOGO REAL
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "2rem",
      }}
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.section>
  );
}
