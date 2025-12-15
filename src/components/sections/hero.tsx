import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40 bg-card">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Building Digital Experiences
          </h1>
          <div className="mt-6 text-lg sm:text-xl md:text-2xl text-primary typewriter">
            <h1 className="font-code">A React Expert</h1>
          </div>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
            Hi, I'm a passionate developer creating modern, responsive, and user-friendly web applications. Let's build something amazing together.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild>
              <Link href="/#contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/#services">My Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
