export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "4rem",
        borderTop: "1px solid #eee",
        backgroundColor: "#fafafa",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "24px",
          textAlign: "center",
          fontSize: "14px",
          color: "#666",
        }}
      >
        © {new Date().getFullYear()} Calzado HelloGod — Todos los derechos
        reservados
      </div>
    </footer>
  );
}
