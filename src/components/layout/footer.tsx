import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-6 py-6 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <Logo className="h-6 w-6" />
          <p className="text-center text-sm leading-loose md:text-left">
            © {new Date().getFullYear()} PixelPro Folio. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/ai-tool"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            AI Tool
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
