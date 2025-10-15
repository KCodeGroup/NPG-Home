import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Navigation from "@/components/Navigation";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NPG Home",
  description:
    "Encuentra tu hogar ideal en los mejores proyectos inmobiliarios del Caribe colombiano",
  icons: {
    icon: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={bricolageGrotesque.className}
        style={{
          margin: 0,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Providers>
          <Navigation />
          <div style={{ flex: 1 }}>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
