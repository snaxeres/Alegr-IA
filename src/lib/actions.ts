"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
  errors?: Record<string, string[] | undefined>;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors below.",
      status: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Simulate sending an email. In a real app, you'd use a service like Resend, SendGrid, or EmailJS.
  console.log('Simulating email sending with data:', validatedFields.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate random success/failure
  if (Math.random() > 0.1) { // 90% success rate
    return {
      status: 'success',
      message: "Thank you for your message! We'll get back to you soon.",
    };
  } else {
    return {
      status: 'error',
      message: "Sorry, there was an issue sending your message. Please try again later.",
    };
  }
}
