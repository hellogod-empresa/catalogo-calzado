import ProductCard from "@/components/ProductCard";
import Breadcrumb from "@/components/Breadcrumbs";
import ProductInfoClient from "@/components/ProductInfoClient";
import ProductGallery, { GalleryItem } from "@/components/ProductGallery";
import { supabasePublic } from "@/lib/supabase/public";
import ProductContent from "@/components/ProductContent";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: product, error } = await supabasePublic
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

  const { data: relatedProducts } = await supabasePublic
    .from("products")
    .select("*")
    .neq("id", product.id)
    .limit(4);

  // 🔹 Galería SIN duplicar imágenes
 const gallery = product.gallery?.length
  ? product.gallery
  : [
      {
        image: product.image,
        description: product.description,
      },
      ...(product.images ?? [])
        .filter((img: string) => img !== product.image)
        .map((img: string, index: number) => ({
          image: img,
          description: product.description,
        })),
    ];

  return (
    <section style={{ padding: "4rem 1rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto 2rem" }}>
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Catálogo", href: "/#catalogo" },
            { label: product.name },
          ]}
        />
      </div>

      <ProductContent
        product={product}
        gallery={gallery}
        relatedProducts={relatedProducts}
      />
    </section>
  );
}
