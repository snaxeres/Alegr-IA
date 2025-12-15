import { ContactForm } from "@/components/contact-form";
import { Map } from "@/components/map";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 md:py-32">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h3 className="text-2xl font-headline font-semibold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <p>San Francisco, CA, USA</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <p>hello@pixelpro.dev</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <p>+1 (123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Map />
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-headline font-semibold">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
