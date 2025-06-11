import Hero from "@/components/sections/Hero";
import Solutions from "@/components/sections/Solutions";
import Industries from "@/components/sections/Industries";
import Products from "@/components/sections/Products";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Solutions />
      <Products />
      <Industries />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
