"use client";

import { Companies } from "@/components/shopify/sections/companies";
import { CTAButton } from "@/components/shopify/sections/CTA-button";
import { FistFightALion } from "@/components/shopify/sections/fist-fight-lion/fist-fight-lion";
import { FreeBonuses } from "@/components/shopify/sections/free-bonuses/free-bonuses";
import { Guarantees } from "@/components/shopify/sections/guarantee/guarantees";
import { Hero } from "@/components/shopify/sections/hero";
import { FiveReasons } from "@/components/shopify/sections/reasons/five-resaons";
import { Stats } from "@/components/shopify/sections/stats";
import { WebsitesAndResults } from "@/components/shopify/sections/websites-and-results/websites-and.results";

export default function Home() {
  return (
    <section>
      <Hero />
      <Companies />
      <Stats />
      <FiveReasons />
      <WebsitesAndResults />
      <Guarantees />
      <FreeBonuses />
      <FistFightALion />
      <CTAButton />
    </section>
  );
}
