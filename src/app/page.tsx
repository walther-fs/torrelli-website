import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Hero from "@/components/home/Hero";
import Spotify from "@/components/home/Spotify";
import Gallery from "@/components/home/Gallery";
//import About from "@/components/home/About";
import LatestNews from "@/components/home/LatestNews";
import Contact from "@/components/home/Contact";
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
        <LatestNews />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}
