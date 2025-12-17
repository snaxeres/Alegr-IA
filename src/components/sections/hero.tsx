"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import Link from "next/link";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40 bg-card">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {t.heroTitle}
          </h1>
          <div className="mt-6 text-lg sm:text-xl md:text-2xl text-primary typewriter">
            <h1 className="font-code inline-block">{t.heroSubtitle}</h1>
          </div>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
            {t.heroDescription}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild>
              <Link href="/#contact">{t.heroButtonContact}</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/#services">{t.heroButtonServices}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
