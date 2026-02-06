"use client";

import { useState } from "react";
import ProductGallery, { GalleryItem } from "@/components/ProductGallery";
import ProductInfoClient from "@/components/ProductInfoClient";
import ProductCard from "@/components/ProductCard";

export default function ProductContent({
  product,
  gallery,
  relatedProducts,
}: any) {
  const [activeItem, setActiveItem] = useState<GalleryItem>(gallery[0]);

  return (
    <>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
        >

        {/* CONTENEDOR FIJO */}
        <div >
          <ProductGallery gallery={gallery} onChange={setActiveItem} />
        </div>

        {/* TEXTO */}
        <div className="product-info-card">
          <span className="badge">PRODUCTO DESTACADO</span>
          <h1 style={{ marginTop: "0.5rem" }}>{product.name}</h1>
          <p className="price">${product.price}</p>

          <p style={{ margin: "1rem 0", color: "#000000" }}>
            {activeItem?.description}
          </p>

          <ProductInfoClient productName={product.name} />
        
        
          {/* 🔒 Información de confianza */}
            <div className="mt-5 rounded-xl border border-gray-300 bg-gray-100 px-5 py-4">
              <ul className="space-y-2 text-xs text-gray-500">
                <li className="flex items-center gap-3">
                  <span className="text-gray-400"></span>
                  <span>Envíos a todo Colombia</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-400"></span>
                  <span>Empresa 100% Colombiana</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-400"></span>
                  <span>Compra segura y atención personalizada</span>
                </li>
                
              </ul>
            </div>





        </div>
      </div>


      <section style={{ maxWidth: "1100px", margin: "4rem auto" }}>
        <h2>Productos relacionados</h2>
        <div className="grid">
          {relatedProducts?.map((p: any) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
