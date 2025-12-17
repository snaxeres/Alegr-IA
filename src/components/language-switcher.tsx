"use client";

import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'es', label: 'ESP' },
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'ENG' },
    { code: 'it', label: 'ITA' },
    { code: 'fr', label: 'FRA' },
    { code: 'zh', label: 'CHI' },
  ] as const;

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <>
      {/* Mobile Dropdown */}
      <div className="sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Globe className="h-5 w-5" />
              <span className="sr-only">Change language</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={cn(language === lang.code && "bg-accent")}
              >
                {lang.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden sm:flex items-center gap-1 border rounded-full p-1">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant="ghost"
            size="sm"
            className={cn(
              "rounded-full h-7 w-10 text-xs",
              language === lang.code && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
            )}
            onClick={() => setLanguage(lang.code)}
          >
            {lang.label}
          </Button>
        ))}
      </div>
    </>
  );
}
