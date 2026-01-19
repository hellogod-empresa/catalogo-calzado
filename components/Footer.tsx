import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "radial-gradient(circle at top, #1a1a1a, #000)",
        color: "#fff",
        padding: "4rem 1.5rem 2rem",
        marginTop: "5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "3rem",
        }}
      >
        {/* ================= LOGO + TEXTO ================= */}
        <div>
          <Image
            src="/LOGO2.jpg" // asegúrate que esté en /public
            alt="HelloGod"
            width={160}
            height={90}
            style={{ marginBottom: "1rem" }}
          />
          <p style={{ fontSize: "14px", color: "#ccc", lineHeight: "1.6" }}>
            Calzado diseñado para destacar.  
            Estilo, carácter y presencia en cada paso.
          </p>
        </div>

        {/* ================= EXPLORAR ================= */}
        <div>
          <h4 style={{ marginBottom: "1rem" }}>Explorar</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li>
              <Link href="/" style={{ color: "#ccc", textDecoration: "none" }}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/catalogo" style={{ color: "#ccc", textDecoration: "none" }}>
                Catálogo
              </Link>
            </li>
            <li>
              <Link href="/contacto" style={{ color: "#ccc", textDecoration: "none" }}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* ================= CONTACTO ================= */}
        <div>
          <h4 style={{ marginBottom: "1rem" }}>Contacto</h4>
          <p style={{ color: "#ccc", fontSize: "14px" }}>📍 Colombia</p>

          <a
            href="https://wa.me/573043545117"
            target="_blank"
            style={{
              display: "inline-block",
              marginTop: "1rem",
              padding: "10px 20px",
              background: "#25D366",
              color: "#000",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            WhatsApp
          </a>
        </div>

        {/* ================= REDES SOCIALES ================= */}
        <div>
          <h4 style={{ marginBottom: "1rem" }}>Síguenos</h4>

          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href="https://facebook.com"
              target="_blank"
              style={{ color: "#fff", fontSize: "18px" }}
            >
              Facebook
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              style={{ color: "#fff", fontSize: "18px" }}
            >
              Instagram
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              style={{ color: "#fff", fontSize: "18px" }}
            >
              TikTok
            </a>
          </div>
        </div>
      </div>

      {/* ================= COPY ================= */}
      <div
        style={{
          marginTop: "3rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid #222",
          textAlign: "center",
          fontSize: "13px",
          color: "#888",
        }}
      >
        © {new Date().getFullYear()} HelloGod — Todos los derechos reservados
      </div>
    </footer>
  );
}
