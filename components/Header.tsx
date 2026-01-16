import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #eaeaea",
        padding: "16px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo / Marca */}
      <Link
        href="/"
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          textDecoration: "none",
          color: "#111",
        }}
      >
        CALZADOS ÉLITE
      </Link>

      {/* Navegación */}
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#444" }}>
          Catálogo
        </Link>

        <a
          href="https://wa.me/573043545117"
          target="_blank"
          style={{
            textDecoration: "none",
            color: "#44a568",
            fontWeight: "bold",
          }}
        >
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
