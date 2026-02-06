import Hero from "@/components/Hero";
import ProductFilters from "@/components/ProductFilters";
import ProductSlider from "@/components/ProductSlider";
import { supabasePublic } from "@/lib/supabase/public";

export const metadata = {
  title: "Catálogo de Calzado | Calzado Premium",
  description:
    "Explora nuestro catálogo de calzado. Compra fácil y rápida por WhatsApp.",
};

export default async function HomePage() {
  const { data: products, error } = await supabasePublic
    .from("products")
    .select("*")
    .order("name");

  if (error) {
    return (
      <main style={{ padding: "3rem", textAlign: "center" }}>
        <p>Error cargando productos</p>
      </main>
    );
  }

  if (!products || products.length === 0) {
    return (
      <main style={{ padding: "3rem", textAlign: "center" }}>
        <p>No hay productos disponibles</p>
      </main>
    );
  }

  return (
    <>
      {/* ================= HERO ÚNICO ================= */}
      <Hero />

      {/* ================= CONTENIDO ================= */}
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2.5rem 1.5rem",
        }}
      >
        {/* SLIDER */}
        <section id="inicio">
          <ProductSlider products={products.slice(0, 6)} />
        </section>

        {/* ESPACIADOR SUAVE */}
        <div
          style={{
            height: "60px",
            background: "linear-gradient(to bottom, transparent, #fff)",
          }}
        />

        {/* CATÁLOGO */}
        <section id="catalogo">
          <header style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "38px", fontWeight: 800 }}>
              Nuestro catálogo
            </h2>
            <p style={{ fontSize: "23px", color: "#000000" }}>
              Diseños pensados para acompañarte todos los días
            </p>
          </header>

          <ProductFilters products={products} />
        </section>

        {/* VALORES */}
        <section
          style={{
            marginTop: "4rem",
            padding: "2.5rem 1rem",
            background: "linear-gradient(100deg, #ff2f92, #c08d0065)",
            borderRadius: "28px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "28px",
              marginBottom: "2.5rem",
              color: "#111",
            }}
          >
            ¿Por qué elegir <span style={{ color: "#ffcee6" }}>HelloGod</span>?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {[
              {
                title: "Diseño exclusivo",
                text: "Modelos únicos que destacan tu estilo.",
              },
              {
                title: "Compra directa",
                text: "Habla con nosotros por WhatsApp sin intermediarios.",
              },
              {
                title: "Envíos nacionales",
                text: "Llegamos a cualquier parte del país.",
              },
              {
                title: "Calidad garantizada",
                text: "Materiales seleccionados y acabados premium.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  padding: "2rem",
                  borderRadius: "20px",
                  textAlign: "center",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                }}
              >
                <h3 style={{ fontSize: "18px", marginBottom: "0.5rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.6 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
