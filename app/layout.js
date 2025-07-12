import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"; // ✅ correct


export const metadata = {
  title: "Raj Swasthik | Portfolio",
  description: "Web Developer and MERN Stack Enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />

        <main className="min-height-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
