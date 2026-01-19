

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#c08d00d5",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image
            src="/LOGO2.jpg"
            alt="HelloGod"
            width={200}
            height={70}
            style={{ objectFit: "contain" }}
          />
          <span
            style={{
              color: "#fff",
              fontWeight: "700",
              fontSize: "18px",
              letterSpacing: "1px",
            }}
          >
            HELLOGOD
          </span>
        </Link>

        {/* NAV */}
        <nav style={{ display: "flex", gap: "20px" }}>
          <Link href="/#inicio" style={linkStyle}>
            Inicio
          </Link>

          <Link href="/#catalogo" style={linkStyle}>
            Catálogo
          </Link>


          <a
            href="https://wa.me/573043545117"
            style={{
              padding: "8px 18px",
              background: "#ffd400",
              color: "#000",
              borderRadius: "20px",
              fontWeight: "600",
              textDecoration: "none",
              boxShadow: "0 8px 20px rgba(255,212,0,0.35)",
            }}
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "15px",
};
