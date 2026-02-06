import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "4rem 1.5rem",
      }}
    >
      {/* RECUADRO HERO */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          minHeight: "420px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "3rem 2rem",

          /* Fondo */
          backgroundImage: "url('/hero-bg1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          borderRadius: "28px",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 20px 45px rgba(0,0,0,0.25)",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(192, 141, 0, 0.34), rgba(0,0,0,0.55))",
          }}
        />

        {/* Contenido */}
        <div
          style={{
            position: "relative",
            maxWidth: "800px",
            color: "#fff",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              marginBottom: "1rem",
              fontWeight: 600,
              opacity: 0.95,
            }}
          >
            Pasos felices hechos en Colombia
          </h2>

          <p
            style={{
              fontSize: "1.2rem",
              opacity: 0.95,
              marginBottom: "2rem",
            }}
          >
            Fabricamos calzado en Colombia con materiales de alta calidad, cuidando cada
            detalle para ofrecer comodidad, durabilidad y estilo para dama, niña y niño.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
           

            
          </div>
        </div>
      </div>
    </section>
  );
}
