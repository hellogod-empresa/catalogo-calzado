"use client";

import { useEffect, useState } from "react";

export type GalleryItem = {
  image: string;
  description?: string;
};

type Props = {
  gallery: GalleryItem[];
  onChange?: (item: GalleryItem) => void;
};

export default function ProductGallery({ gallery, onChange }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem =
    gallery && gallery.length > 0 && gallery[activeIndex]
      ? gallery[activeIndex]
      : gallery?.[0];

  if (!activeItem) {
    return (
      <div className="bg-white rounded-xl border-2 border-gray-300 p-5">
        <div className="w-[420px] h-[420px] flex items-center justify-center rounded-2xl border bg-gray-50 mx-auto">
          <span className="text-sm text-gray-400">Sin imágenes</span>
        </div>
      </div>
    );
  }

  useEffect(() => {
    onChange?.(activeItem);
  }, [activeItem, onChange]);

  return (
    <div className="bg-white rounded-xl border-2 border-gray-300 p-5">
      <div
        className="w-[420px] mx-auto"
        style={{
          maxWidth: "420px",
          minWidth: "420px",
        }}
      >
        {/* IMAGEN GRANDE CON BORDE */}
        <div
          className="flex items-center justify-center overflow-hidden rounded-xl border-2 border-black-400 bg-white"
          style={{
            width: "420px",
            height: "420px",
          }}
        >
          <img
            src={activeItem.image}
            alt={activeItem.description || "Producto"}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        {/* MINIATURAS CENTRADAS */}
        {gallery.length > 1 && (
          <div className="flex gap-3 justify-center mt-4 mx-auto w-fit">
            {gallery.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`border-2 rounded-lg transition ${
                  index === activeIndex ? "border-black" : "border-transparent"
                }`}
              >
                <div
                  className="flex items-center justify-center bg-white overflow-hidden rounded-md"
                  style={{
                    width: "120px",
                    height: "120px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.description || ""}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
