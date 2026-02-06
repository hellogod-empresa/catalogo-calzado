"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";


export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // bajando
        setShow(false);
      } else {
        // subiendo
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <header
      style={{
        position: "fixed", // 🔥 necesario
        top: 0,
         left: 0,
         
        width: "100%",
        zIndex: 100,

        /* 🟡 Fondo con imagen */
        backgroundImage: "url('public/fondo.png')",
        backgroundSize:"100% auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // 🔥 efecto pro

        transform: show ? "translateY(0)" : "translateY(-120%)",

        /* 🟡 Overlay dorado */
          backgroundColor: "rgba(175, 128, 0, 0.55)",
          backdropFilter: "blur(8px)",

         color: "#fff",
         transition: "transform 0.45s ease",

      }}
    >
      {/* OVERLAY */}
      <div style={{ background: "rgba(71, 71, 71, 0.45)" }}>
        {/* BARRA SUPERIOR */}
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            color: "#fff",
            padding: "25px 12px",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
          }}
        >
        </div>

       {/* NAV */}
<div
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "16px 24px",
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
  }}
>
  {/* IZQUIERDA – redes */}
  <div className="socials">
  <a href="https://www.instagram.com/hellogod.sas" target="_blank" aria-label="Instagram">
    <Instagram size={30} />
  </a>
  <a href="https://www.facebook.com/hellogod.sas" target="_blank" aria-label="Facebook">
    <Facebook size={30} />
  </a>
   <a href="https://www.tiktok.com/@hellogod.sas" target="_blank" rel="noreferrer">
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.525 2h2.1c.13 1.36.74 2.55 1.75 3.4 1 .84 2.27 1.32 3.62 1.35v2.13c-1.5.05-3-.36-4.3-1.17v7.74c0 3.3-2.7 5.98-6 5.98s-6-2.68-6-5.98 2.7-5.98 6-5.98c.37 0 .73.03 1.08.1v2.2a3.9 3.9 0 0 0-1.08-.15c-2.06 0-3.75 1.67-3.75 3.73 0 2.06 1.69 3.73 3.75 3.73s3.75-1.67 3.75-3.73V2z"/>
    </svg>
  </a>
  
</div>


  {/* CENTRO – LOGO */}
  <Link href="/" style={{ textDecoration: "none" }}>
    <span className="logo-text">HELLO GOD</span>
  </Link>

  {/* DERECHA – navegación + whatsapp */}
  <div className="nav-right">
    <nav className="nav-links">
      <Link href="/#inicio" className="nav-link">
        Inicio
      </Link>
      <Link href="/#catalogo" className="nav-link">
        Catálogo
      </Link>
    </nav>

    <a
      href="https://wa.me/573043545117"
      className="whatsapp-cta"
    >
      WhatsApp
    </a>
  </div>
</div>

      </div>
    </header>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "15px",
};
