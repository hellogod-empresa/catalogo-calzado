"use client";

import { useState } from "react";

export default function ProductInfoClient({
  productName,
}: {
  productName: string;
}) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const sizes = [35, 36, 37, 38, 39, 40];

  return (
    <>
      {/* TALLAS */}
      <div style={{ marginTop: "1.8rem" }}>
        <p style={{ fontSize: "14px", fontWeight: "600", marginBottom: "0.6rem" }}>
          Selecciona tu talla
        </p>

        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          {sizes.map((size) => {
            const active = selectedSize === size;

            return (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  padding: "10px 16px",
                  borderRadius: "999px",
                  border: active ? "2px solid #000" : "1px solid #ddd",
                  background: active ? "#000000f8" : "#fff",
                  color: active ? "#fff" : "#000",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* BOTÓN WHATSAPP */}
      <a
        href={`https://wa.me/573043545117?text=${encodeURIComponent(
          `Hola, estoy interesado en el producto: ${productName}. Talla: ${
            selectedSize ?? "por confirmar"
          }`
        )}`}
        style={{
          display: "inline-block",
          marginTop: "2rem",
          padding: "14px 32px",
          background: "#000",
          color: "#fff",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Comprar por WhatsApp
      </a>
    </>
  );
}
