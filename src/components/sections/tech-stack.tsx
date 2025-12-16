"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ReactIcon } from "@/components/icons/react-icon";
import { NodeIcon } from "@/components/icons/node-icon";
import { TailwindIcon } from "@/components/icons/tailwind-icon";
import { Database, Zap } from "lucide-react";
import { JavascriptIcon } from "../icons/javascript-icon";
import { SassIcon } from "../icons/sass-icon";
import { BootstrapIcon } from "../icons/bootstrap-icon";
import { ExpressIcon } from "../icons/express-icon";
import { NestIcon } from "../icons/nest-icon";
import { WordpressIcon } from "../icons/wordpress-icon";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

const technologies = [
  { name: "React", icon: ReactIcon },
  { name: "Vite", icon: Zap },
  { name: "JavaScript", icon: JavascriptIcon },
  { name: "SASS", icon: SassIcon },
  { name: "Bootstrap", icon: BootstrapIcon },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "Node.js", icon: NodeIcon },
  { name: "Express.js", icon: ExpressIcon },
  { name: "Nest.js", icon: NestIcon },
  { name: "MySQL", icon: Database },
  { name: "WordPress", icon: WordpressIcon },
];

export default function TechStack() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="stack" className="w-full py-20 md:py-32 bg-card">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            {t.stackTitle}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {t.stackDescription}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 max-w-5xl mx-auto">
          {technologies.map((tech) => (
            <Card key={tech.name} className="p-4 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0 flex flex-col items-center justify-center gap-4">
                <tech.icon className="w-12 h-12 text-primary" />
                <p className="font-semibold text-sm text-center">{tech.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
