"use client";

import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";

type Product = {
  id: string;
  name: string;
  description: string | null;
  image: string;
  price: number;
  slug: string;
};

export default function ProductFilters({
  products,
}: {
  products: Product[];
}) {
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchName = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchPrice =
        maxPrice === "" || product.price <= maxPrice;

      return matchName && matchPrice;
    });
  }, [search, maxPrice, products]);

  return (
    <>
      {/* FILTROS */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "2.5rem",
          flexWrap: "wrap",
        }}
      >
        <input
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: "1",
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "15px",
          }}
        />

        <input
          type="number"
          placeholder="Precio máximo"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(
              e.target.value === "" ? "" : Number(e.target.value)
            )
          }
          style={{
            width: "200px",
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "15px",
          }}
        />
      </div>

      {/* RESULTADOS */}
      {filteredProducts.length === 0 ? (
        <p>No se encontraron productos</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "32px",
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </>
  );
}
