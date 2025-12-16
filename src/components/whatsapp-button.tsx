"use client";

import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";
import { WhatsAppIcon } from "./icons/whatsapp-icon";

type WhatsAppButtonProps = Omit<ComponentProps<typeof Button>, "onClick"> & {
  service: string;
  phoneNumber: string; // e.g. 11234567890
};

export function WhatsAppButton({ service, phoneNumber, ...props }: WhatsAppButtonProps) {
  const openWhatsApp = () => {
    const message = `Hola! Estoy interesado en el servicio de ${service}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button onClick={openWhatsApp} {...props}>
      <WhatsAppIcon className="h-5 w-5 mr-2" />
      WhatsApp
    </Button>
  );
}
