"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { submitContactForm, type ContactFormState } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

function SubmitButton() {
  const { pending } = useFormStatus();
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {t.contactSendButton}
    </Button>
  );
}

export function ContactForm() {
  const initialState: ContactFormState = { message: "", status: 'idle' };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: "Success!",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.status === 'error') {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">{t.contactName}</Label>
        <Input id="name" name="name" placeholder={t.contactNamePlaceholder} required />
        {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name.join(", ")}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">{t.contactEmail}</Label>
        <Input id="email" name="email" type="email" placeholder={t.contactEmailPlaceholder} required />
        {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email.join(", ")}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{t.contactMessage}</Label>
        <Textarea id="message" name="message" placeholder={t.contactMessagePlaceholder} required />
        {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message.join(", ")}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}
