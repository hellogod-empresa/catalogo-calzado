import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        borderBottom: "1px solid #eee",
        backgroundColor: "#fff",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO / MARCA */}
        <Link
          href="/"
          style={{
            fontSize: "1.4rem",
            fontWeight: "bold",
            textDecoration: "none",
            color: "#111",
          }}
        >
          👞 Calzado HelloGod
        </Link>

        {/* REDES */}
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="#" style={{ textDecoration: "none", color: "#555" }}>
            Instagram
          </a>
          <a href="#" style={{ textDecoration: "none", color: "#555" }}>
            Facebook
          </a>
          <a href="#" style={{ textDecoration: "none", color: "#555" }}>
            TikTok
          </a>
        </div>
      </nav>
    </header>
  );
}
