/*import ProductCard from "@/components/ProductCard";
import { createClient } from "@supabase/supabase-js";

// 🔹 Cliente Supabase (solo lectura pública)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function HomePage() {
  // 🔹 Consulta a Supabase
  const { data: products, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    return <p>Error cargando productos</p>;
  }

  return (
  <main>
    <h1>Catálogo de Calzado</h1>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "20px",
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </main>
);

}*/
/*import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, Arial, sans-serif",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}*/
/*
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Calzado HelloGod",
  description: "Catálogo de calzado de alta calidad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, sans-serif",
          backgroundColor: "#f5f5f5",
          color: "#111",
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
*/
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Calzado Premium | Catálogo Oficial",
  description:
    "Descubre calzado de alta calidad. Compra fácil por WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, sans-serif",
          backgroundColor: "#f3f3f3",
          color: "#111",
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

