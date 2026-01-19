

"use client";

type Product = {
  id: string;
  name: string;
  description: string | null;
  image: string;
  price: number;
  slug: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (

    
    <div className="product-card">
      <div className="image-wrapper">
        <img src={product.image} alt={product.name} />
      </div>

      <h3>{product.name}</h3>

      {product.description && <p>{product.description}</p>}

      <strong>${product.price}</strong>

      <a
        href={`/producto/${product.slug}`}
        className="details-btn"
      >
        Ver detalles
      </a>



      <a
        href={`https://wa.me/573043545117?text=Hola, estoy interesado en el producto: ${encodeURIComponent(
          product.name
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        Comprar por WhatsApp
      </a>
    </div>
  );
}
