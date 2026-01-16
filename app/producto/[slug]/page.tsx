import { createClient } from "@supabase/supabase-js";

export async function generateMetadata({ params }: any) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { slug } = await params;

  const { data: product } = await supabase
    .from("products")
    .select("name, description, image")
    .eq("slug", slug)
    .single();

  if (!product) {
    return {
      title: "Producto no encontrado",
    };
  }

  return {
    title: `${product.name} | Calzado Premium`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image,
        },
      ],
    },
  };
}



const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type PageProps = {
  params: {
    slug: string;
  };
};

const WHATSAPP_NUMBER = "573043545117";

export default async function ProductPage(props: PageProps) {
  const { slug } = await props.params;

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !product) {
    return (
      <main style={{ padding: "2rem" }}>
        <h1>Producto no encontrado</h1>
      </main>
    );
  }

  const message = encodeURIComponent(
    `Hola, estoy interesado en el producto:\n\n${product.name}\nPrecio: $${product.price}`
  );

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
        }}
      >
        {/* IMAGEN */}
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            borderRadius: "16px",
            objectFit: "cover",
          }}
        />

        {/* INFO */}
        <div>
          <h1 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>
            {product.name}
          </h1>

          <p
            style={{
              fontSize: "1.6rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            ${product.price}
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              marginBottom: "2rem",
              color: "#444",
            }}
          >
            {product.description}
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#25D366",
              color: "#fff",
              padding: "16px 28px",
              borderRadius: "10px",
              fontSize: "1rem",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Comprar por WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
