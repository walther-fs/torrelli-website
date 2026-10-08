import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Spotify from "@/components/home/Spotify";
import Gallery from "@/components/home/Gallery";
import About from "@/components/home/About";
import LatestNews from "@/components/home/LatestNews";
import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Sidebar />
        <Hero />
        <Spotify />
        <Gallery />
        <About />
        <LatestNews />

        <section id="contact">
          <h2>Contacto</h2>
          <p>Ponte en contacto con TORRELLI.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
