import Link from "next/link";

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  slug: string;
};

const WHATSAPP_NUMBER = "573043545117";

export default function ProductCard({ product }: { product: Product }) {
  const message = encodeURIComponent(
    `Hola, estoy interesado en el producto:\n\n${product.name}\nPrecio: $${product.price}`
  );

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 👉 ZONA CLICKEABLE AL PRODUCTO */}
      <Link
        href={`/producto/${product.slug}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            cursor: "pointer",
          }}
        />

        <div style={{ padding: "16px", flexGrow: 1 }}>
          <h3 style={{ margin: "0 0 8px 0", fontSize: "18px" }}>
            {product.name}
          </h3>

          <p style={{ fontWeight: "bold", margin: "4px 0" }}>
            ${product.price}
          </p>

          <p style={{ fontSize: "14px", color: "#555" }}>
            {product.description}
          </p>
        </div>
      </Link>

      {/* 👉 BOTÓN DE COMPRA (NO NAVEGA) */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#44a568",
          color: "#fff",
          textAlign: "center",
          padding: "14px",
          textDecoration: "none",
          fontWeight: "bold",
          borderTop: "1px solid #eee",
        }}
      >
        Comprar por WhatsApp
      </a>
    </div>
  );
}
