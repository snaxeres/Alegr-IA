import Image from "next/image";
import placeholderData from "@/lib/placeholder-images.json";

export function Map() {
  const image = placeholderData.placeholderImages.find(p => p.id === 'contact-map');

  if (!image) {
    return <div className="aspect-video w-full bg-muted"></div>;
  }

  return (
    <div className="aspect-video w-full relative">
      <Image
        src={image.imageUrl}
        alt={image.description}
        fill
        className="object-cover"
        data-ai-hint={image.imageHint}
      />
    </div>
  );
}
