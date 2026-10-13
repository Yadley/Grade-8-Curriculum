import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/hub/header";
import { Hero } from "@/components/hub/hero";
import { Criteria } from "@/components/hub/criteria";
import { AfricaCanvas } from "@/components/hub/africa-canvas";
import { Corpus } from "@/components/hub/corpus";
import { Toolkit } from "@/components/hub/toolkit";
import { Access } from "@/components/hub/access";
import { Contributors } from "@/components/hub/contributors";
import { Study } from "@/components/hub/study";
import { Footer } from "@/components/hub/footer";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <Header />
      <main id="content">
        <Hero />
        <Criteria />
        <AfricaCanvas />
        <Corpus />
        <Toolkit />
        <Access />
        <Contributors />
        <Study />
      </main>
      <Footer />
    </>
  );
}
