/*"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import type { Metadata } from "next";
import { createClient } from "@supabase/supabase-js";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data: product } = await supabase
    .from("products")
    .select("name, description, image")
    .eq("slug", slug)
    .single();

  if (!product) {
    return {
      title: "Producto | Calzado Premium",
    };
  }

  return {
    title: `${product.name} | Calzado Premium`,
    description:
      product.description ??
      "Descubre nuestro calzado premium. Compra fácil por WhatsApp.",

    openGraph: {
      title: product.name,
      description: product.description ?? "",
      images: [
        {
          url: product.image.trim(),
        },
      ],
    },
  };
}



type Product = {
  id: string;
  name: string;
  price: number;
};

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("id, name, price")
        .order("name");

      if (error) {
        console.error(error);
      } else {
        setProducts(data ?? []);
      }

      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <main style={{ padding: "3rem", maxWidth: "1200px", margin: "0 auto" }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1>Panel de Administración</h1>

        <button onClick={() => supabase.auth.signOut()}>
          Cerrar sesión
        </button>
      </header>

      <h2>Productos</h2>

      {loading ? (
        <p>Cargando...</p>
      ) : products.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              {p.name} – ${p.price}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
*/
import type { Metadata } from "next";
import AdminClient from "../AdminClient";

export const metadata: Metadata = {
  title: "Admin | Catálogo",
};

export default function Page() {
  return <AdminClient />;
}
