import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Catálogo de Calzado | HelloGod",
  description: "Calzado de alta calidad para toda ocasión",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <Navbar />

        <main style={{ minHeight: "80vh" }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
