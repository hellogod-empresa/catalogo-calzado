"use client";

import Link from "next/link";

type Product = {
  id: string;
  name: string;
  image: string;
  slug: string;
};

export default function ProductSlider({
  products,
}: {
  products: Product[];
}) {
  return (
    <section style={{ marginTop: "4rem" }}>
      <h2
        style={{
          fontSize: "34px",
          marginBottom: "1.5rem",
          color: "#111",
        }}
      >
        Destacados
      </h2>

      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          overflowX: "auto",
          paddingBottom: "1rem",
          scrollSnapType: "x mandatory",
        }}
      >
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/producto/${product.slug}`}
            style={{
              minWidth: "300px",
              flex: "0 0 auto",
              scrollSnapAlign: "start",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                borderRadius: "22px",
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                transition: "transform 0.35s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-6px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "contain",
                  display: "block",
                }}
              />

              <div
                style={{
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    color: "#111",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {product.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
