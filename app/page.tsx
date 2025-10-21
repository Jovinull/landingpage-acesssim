"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import Features from "@/components/Features";
import CatalisaSection from "@/components/CatalisaSection";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoCloud />
      <Features />
      <CatalisaSection />
      <Stats />
      <Timeline />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
