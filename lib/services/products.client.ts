import { supabaseClient } from "@/lib/supabase/client";

export async function createProduct(product: {
  name: string;
  description?: string;
  price: number;
  image: string;
  slug?: string | null;
}) {
  const { error } = await supabaseClient
    .from("products")
    .insert([product]);

  if (error) throw error;
}
