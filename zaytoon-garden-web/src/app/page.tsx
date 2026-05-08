import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SignatureDishes from "@/components/sections/SignatureDishes";
import Experience from "@/components/sections/Experience";
import Reviews from "@/components/sections/Reviews";
import Gallery from "@/components/sections/Gallery";
import MenuPreview from "@/components/sections/MenuPreview";
import Reservation from "@/components/sections/Reservation";
import Location from "@/components/sections/Location";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SignatureDishes />
      <MenuPreview />
      <Experience />
      <Reviews />
      <Gallery />
      <Reservation />
      <Location />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}
