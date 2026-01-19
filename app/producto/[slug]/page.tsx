import { createClient } from "@supabase/supabase-js";
import ProductCard from "@/components/ProductCard";
import Breadcrumb from "@/components/Breadcrumbs";
import ProductInfoClient from "@/components/ProductInfoClient";
import { supabase } from "@/lib/supabase/client";


/*
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
*/
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !product) {
    return (
      <main style={{ padding: "4rem", textAlign: "center" }}>
        <h1>Producto no encontrado</h1>
      </main>
    );
  }

  const { data: relatedProducts } = await supabase
    .from("products")
    .select("*")
    .neq("id", product.id)
    .limit(4);

  return (
    <section
      style={{
        padding: "4rem 1rem",
        background: "linear-gradient(135deg, #fff 0%, #ffd40030 100%)",
      }}
    >
      {/* 🧭 BREADCRUMB */}
      <div style={{ maxWidth: "1100px", margin: "0 auto 2rem" }}>
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Catálogo", href: "/catalogo" },
            { label: product.name },
          ]}
        />
      </div>

      {/* CONTENEDOR PRINCIPAL */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "32px",
          padding: "3rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
        }}
      >
        {/* IMAGEN */}
        <div
          style={{
            borderRadius: "24px",
            overflow: "hidden",
            background: "#f6f6f6",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* INFO */}
        <div>
          <span
            style={{
              display: "inline-block",
              padding: "6px 14px",
              background: "#ff2f92",
              color: "#fff",
              fontSize: "12px",
              borderRadius: "999px",
              marginBottom: "1rem",
            }}
          >
            PRODUCTO DESTACADO
          </span>

          <h1 style={{ fontSize: "32px", marginBottom: "0.5rem" }}>
            {product.name}
          </h1>

          <p
            style={{
              fontSize: "24px",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            ${product.price}
          </p>

          <p style={{ color: "#000000", lineHeight: "1.6" }}>
            {product.description}
          </p>

           

               <div
            style={{
              marginTop: "1.5rem",
              padding: "1rem 1.25rem",
              background: "#fafafa",
              borderRadius: "16px",
              border: "1px solid #eee",
              display: "grid",
              gap: "0.6rem",
            }}
          >
            <div style={{ color: "#555",display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span>✔</span>
              <span style={{ fontSize: "14px" }}>Envíos a toda Colombia</span>
            </div>

            <div style={{ color: "#555",display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span>✔</span>
              <span style={{ fontSize: "14px" }}>Venta al por mayor</span>
            </div>

            <div style={{ color: "#555",display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span>✔</span>
              <span style={{ fontSize: "14px" }}>Pago contra entrega</span>
            </div>

            <div style={{ color: "#555",display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span>✔</span>
              <span style={{ fontSize: "14px" }}>Producto garantizado</span>
            </div>
          </div>

          <ProductInfoClient productName={product.name} />

           </div>
           </div>
            

      {/* PRODUCTOS RELACIONADOS */}
      <section style={{ marginTop: "5rem", maxWidth: "1100px", marginInline: "auto" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "1rem" }}>
          Productos relacionados
        </h2>

        <p style={{ color: "#c08d00", marginBottom: "2rem" }}>
          Otros modelos que podrían interesarte
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "2rem",
          }}
        >
          {relatedProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </section>
  );
}
