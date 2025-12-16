"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import placeholderData from "@/lib/placeholder-images.json";
import { services } from "@/lib/services";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Services() {
  const { placeholderImages } = placeholderData;
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="services" className="w-full py-20 md:py-32">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            {t.servicesTitle}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {t.servicesDescription}
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-6xl mx-auto mt-16"
        >
          <CarouselContent>
            {services.map((service) => {
              const image = placeholderImages.find(p => p.id === service.imageId);
              return (
                <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col h-full overflow-hidden">
                      <CardHeader>
                        {image && (
                          <div className="aspect-video -m-6 mb-0 overflow-hidden">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              width={600}
                              height={400}
                              className="object-cover w-full h-full"
                              data-ai-hint={image.imageHint}
                            />
                          </div>
                        )}
                      </CardHeader>
                      <CardContent className="flex-grow pt-6">
                        <CardTitle className="font-headline">{service.title}</CardTitle>
                        <CardDescription className="mt-2 h-12">{service.description}</CardDescription>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc list-inside">
                          {service.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center pt-4">
                        <p className="font-semibold text-lg">{service.price}</p>
                        <Button asChild variant="outline">
                          <Link href={`/services/${service.id}`}>
                            Ver más
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
