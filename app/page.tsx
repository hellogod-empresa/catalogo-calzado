import ProductCard from "@/components/ProductCard";
import { createClient } from "@supabase/supabase-js";
export const metadata = {
  title: "Catálogo de Calzado | Calzado Premium",
  description:
    "Explora nuestro catálogo de calzado. Compra fácil y rápida por WhatsApp.",
};

// 🔹 Cliente Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function HomePage() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("name");

  if (error) {
    return <p>Error cargando productos</p>;
  }

  if (!products || products.length === 0) {
    return <p>No hay productos disponibles</p>;
  }

  return (
    <main
      style={{
        padding: "2.5rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* HERO / PRESENTACIÓN */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "3rem",
          borderRadius: "20px",
          marginBottom: "3rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            marginBottom: "1rem",
            color: "#111",
          }}
        >
          Calzado diseñado para destacar
        </h1>

        <p
          style={{
            fontSize: "17px",
            color: "#555",
            maxWidth: "600px",
            lineHeight: "1.6",
          }}
        >
          Explora nuestra colección de calzado premium. Estilo, comodidad
          y calidad en cada par. Compra fácil y rápida por WhatsApp.
        </p>
      </section>

      {/* CATÁLOGO */}
      <section>
        <h2
          style={{
            fontSize: "26px",
            marginBottom: "2rem",
            color: "#111",
          }}
        >
          Catálogo
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "32px",
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
