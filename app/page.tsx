import ProductFilters from "@/components/ProductFilters";
import { createClient } from "@supabase/supabase-js";
import ProductSlider from "@/components/ProductSlider";

export const metadata = {
  title: "Catálogo de Calzado | Calzado Premium",
  description:
    "Explora nuestro catálogo de calzado. Compra fácil y rápida por WhatsApp.",
};

// 🔹 Cliente Supabase (lectura pública)
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
      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2.5rem 1.5rem",
        }}
      >
        {/* ================= HERO ================= */}
        <section
          style={{
            padding: "6rem 1rem",
            background: "linear-gradient(135deg, #ffffff 0%, #c08d0050 100%)",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              background: "#ffffff",
              borderRadius: "40px",
              padding: "3rem",
              boxShadow: "0 20px 60px #ffffff5d",
              position: "relative",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "6px 14px",
                backgroundColor: "#000",
                color: "#fff",
                fontSize: "12px",
                borderRadius: "999px",
                letterSpacing: "0.5px",
                marginBottom: "1.5rem",
              }}
            >
              NUEVA COLECCIÓN
            </span>

            {/* DETALLE DECORATIVO */}
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100px",
                height: "6px",
                background: "#ff2f92",
                borderTopLeftRadius: "32px",
              }}
            />

            <h1
              style={{
                fontSize: "40px",
                fontWeight: "700",
                marginBottom: "1rem",
                lineHeight: "1.2",
              }}
            >
              Calzado diseñado para destacar
            </h1>

            <p
              style={{
                fontSize: "18px",
                color: "#000000",
                maxWidth: "600px",
                lineHeight: "1.6",
              }}
            >
              Explora nuestra colección de calzado premium. Estilo, comodidad y
              calidad en cada par. Compra fácil y rápida por WhatsApp.
            </p>

            <a
              href="#catalogo"
              style={{
                display: "inline-block",
                marginTop: "2rem",
                padding: "14px 32px",
                background: "#ffd400",
                color: "#000",
                borderRadius: "30px",
                fontWeight: "600",
                textDecoration: "none",
                boxShadow: "0 10px 25px rgba(255,212,0,0.35)",
              }}
            >
              Ver catálogo
            </a>
          </div>
        </section>

        {/* ================= SLIDER ================= */}
        <section id="inicio">
          <ProductSlider products={products.slice(0, 6)} />
        </section>


        {/* ================= HEADER CATÁLOGO ================= */}
        <section id="catalogo">
          <header style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "0.5rem" }}>
              Catálogo
            </h2>

            <p style={{ color: "#000000", fontSize: "20px" }}>
              Botas y calzado seleccionados de alta calidad
            </p>
          </header>

          <ProductFilters products={products} />
        </section>


        {/* ================= VALORES ================= */}
        <section
          style={{
            marginTop: "4rem",
            padding: "2.5rem 1rem",
            background: "linear-gradient(135deg, #f7f7f7, #c08d0065)",
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
            ¿Por qué elegir <span style={{ color: "#ff2f92" }}>HelloGod</span>?
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
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    marginBottom: "0.5rem",
                    color: "#353030",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#000000",
                    lineHeight: "1.6",
                  }}
                >
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
