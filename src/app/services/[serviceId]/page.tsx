
import { services, projectPlaceholders } from '@/lib/services';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Eye } from 'lucide-react';
import { WhatsAppButton } from '@/components/whatsapp-button';

export default function ServicePage({ params }: { params: { serviceId: string } }) {
  const service = services.find((s) => s.id === params.serviceId);

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto py-20 md:py-32">
      <div className="mb-8">
        <Button asChild variant="outline">
            <Link href="/#services" className="inline-flex items-center gap-2">
                <ArrowLeft />
                Volver a Servicios
            </Link>
        </Button>
      </div>
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">
          {service.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          {service.description}
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectPlaceholders.map((project) => (
          <Card key={project.id} className="overflow-hidden flex flex-col">
            <CardHeader className="p-0">
              <div className="aspect-video relative">
                <Image
                  src={project.imageUrl}
                  alt={project.description}
                  fill
                  className="object-cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="font-headline">{project.title}</CardTitle>
              <CardDescription className="mt-2">{project.description}</CardDescription>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc list-inside">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <p className="font-semibold text-lg">{service.price}</p>
              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.liveUrl} target="_blank" rel="noreferrer">
                      <Eye className="h-4 w-4 mr-2" />
                      Vista
                    </Link>
                  </Button>
                )}
                <WhatsAppButton 
                  size="sm"
                  service={`${project.title} (${service.title})`}
                  phoneNumber="5491568908235"
                />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Generate static paths for each service
export async function generateStaticParams() {
  return services.map((service) => ({
    serviceId: service.id,
  }));
}
