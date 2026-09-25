import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Audience from "@/components/Audience";
import Nbr9050 from "@/components/Nbr9050";
import Validation from "@/components/Validation";
import Pricing from "@/components/Pricing";
import Achievements from "@/components/Achievements";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { HomeJsonLd } from "@/components/JsonLd";

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="conteudo" tabIndex={-1} className="overflow-x-clip outline-none">
        <Hero />
        <LogoCloud />
        <About />
        <HowItWorks />
        <Features />
        <Audience />
        <Nbr9050 />
        <Validation />
        <Achievements />
        <Pricing />
        <Team />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <StickyCTA />
      <HomeJsonLd />
    </>
  );
}
