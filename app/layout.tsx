import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Baloo_2, Poppins } from "next/font/google";

/* 🧸 Fuente divertida para títulos */
const fontTitle = Baloo_2({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-title",
});

/* 📖 Fuente legible para texto normal */
const fontBody = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: "Catálogo de Calzado | HelloGod",
  description: "Calzado con estilo y comodidad para mujer y niña",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${fontTitle.variable} ${fontBody.variable}`}>
      <body>
        <Navbar />

        <main style={{ paddingTop: "140px", minHeight: "80vh" }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
