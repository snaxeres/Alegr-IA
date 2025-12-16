"use client";

import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'es', label: 'ESP' },
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'ENG' },
  ] as const;

  return (
    <div className="flex items-center gap-1 border rounded-full p-1">
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
  );
}
