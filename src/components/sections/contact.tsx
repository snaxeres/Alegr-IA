
"use client";

import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="w-full py-20 md:py-32">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            {t.contactTitle}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {t.contactDescription}
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="https://wa.me/5491568908235?text=Hola!%20Estoy%20interesado%20en%20tus%20servicios." target="_blank" rel="noreferrer">
              <WhatsAppIcon className="h-6 w-6 mr-2" />
              WhatsApp
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="https://github.com/snaxeres" target="_blank" rel="noreferrer">
              <Github className="h-6 w-6 mr-2" />
              GitHub
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="https://www.linkedin.com/in/enrii-alegre-ab9b45152/" target="_blank" rel="noreferrer">
              <Linkedin className="h-6 w-6 mr-2" />
              LinkedIn
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="#" target="_blank" rel="noreferrer">
              <Instagram className="h-6 w-6 mr-2" />
              Instagram
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
