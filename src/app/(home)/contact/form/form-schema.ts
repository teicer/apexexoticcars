import z from "zod";

export const schema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone_number: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormSchema = z.infer<typeof schema>;
