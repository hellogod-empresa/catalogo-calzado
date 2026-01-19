"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

type Product = {
  id: string;
  name: string;
  price: number;
};

export default function AdminClient() {
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
