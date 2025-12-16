"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { LanguageSwitcher } from "@/components/language-switcher";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const NAV_LINKS = [
    { href: "/#services", label: t.navServices },
    { href: "/#stack", label: t.navStack },
    { href: "/#contact", label: t.navContact },
    { href: "/translator", label: t.navTranslator },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block font-headline">
              PixelPro Folio
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link
              href="/"
              className="mb-6 flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Logo className="mr-2 h-6 w-6" />
              <span className="font-bold font-headline">PixelPro Folio</span>
            </Link>
            <div className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        
        <Link href="/" className="flex items-center space-x-2 md:hidden">
          <Logo className="h-6 w-6" />
          <span className="font-bold sm:inline-block font-headline">
            PixelPro Folio
          </span>
        </Link>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
