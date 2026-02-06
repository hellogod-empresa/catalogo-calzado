export default function ContactoPage() {
  return (
    <section
      style={{
        padding: "4rem 1rem",
        background: "linear-gradient(135deg, #fff 0%, #ffd40030 100%)",
        minHeight: "70vh",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "32px",
          padding: "3rem",
          boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "1rem" }}>
          Contáctanos
        </h1>

        <p style={{ color: "#555", marginBottom: "2rem", lineHeight: "1.6" }}>
          ¿Tienes preguntas, deseas comprar al por mayor o necesitas asesoría?
          Escríbenos y te responderemos lo más pronto posible.
        </p>

        <div style={{ display: "grid", gap: "1.5rem" }}>
          <div>
            <strong>📞 WhatsApp</strong>
            <p>
              <a
                href="https://wa.me/573043545117"
                target="_blank"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                +57 304 354 5117
              </a>
            </p>
          </div>

          <div>
            <strong>📍 Ubicación</strong>
            <p>Bogotá, Colombia</p>
          </div>

          <div>
            <strong>📧 Correo</strong>
            <p>hellogod.empresa@gmail.com</p>
          </div>
        </div>

        <a
          href="https://wa.me/573043545117"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "2.5rem",
            padding: "14px 32px",
            background: "#000",
            color: "#fff",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Escribir por WhatsApp
        </a>


          <div style={{ marginTop: "2rem" }}>
  <h3 style={{ fontSize: "20px", marginBottom: "1rem" }}>
    Síguenos en redes sociales
  </h3>

  <div
    style={{
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
    }}
  >
    {/* Instagram */}
    <a
      href="https://www.instagram.com/hellogod.sas"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: "10px 18px",
        borderRadius: "999px",
        background: "#f5f5f5",
        color: "#000",
        textDecoration: "none",
        fontWeight: "500",
      }}
    >
      📸 Instagram
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/hellogod.sas"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: "10px 18px",
        borderRadius: "999px",
        background: "#f5f5f5",
        color: "#000",
        textDecoration: "none",
        fontWeight: "500",
      }}
    >
      📘 Facebook
    </a>

    {/* TikTok */}
    <a
      href="https://www.tiktok.com/@hellogod.sas"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: "10px 18px",
        borderRadius: "999px",
        background: "#f5f5f5",
        color: "#000",
        textDecoration: "none",
        fontWeight: "500",
      }}
    >
      🎵 TikTok
    </a>
  </div>
</div>

        
      </div>
    </section>
  );
}
