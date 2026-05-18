"use client";

import React, { useState } from "react";
import { Country, getCountries, getCountryCallingCode } from "react-phone-number-input";

import Input from "@/components/form/input";
import Title from "@/components/form/Title";
import "react-phone-number-input/style.css";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, ContactFormSchema } from "./form-schema";
const ContactForm = () => {
  const [country, setCountry] = useState<Country>("GR");
  const [phone, setPhone] = useState<string | undefined>("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactFormSchema) => {
    try {
      const payload = {
        ...data,
        phone_number: `+${getCountryCallingCode(country)}${data.phone_number}`,
      };

      console.log("DATA TO SUBMIT", payload);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Failed to submit form");
      }

      console.log("SUCCESS", result);

      reset();
    } catch (error) {
      console.error(error);

      setError("root", {
        message: "Failed to submit the form. Please try again.",
      });
    }
  };

  return (
    <div>
      <h3 className="lg:text-lg text-xl">Add Your Details</h3>
      <form onSubmit={handleSubmit((data) => onSubmit(data))} className="mt-6 flex flex-col">
        <div className="w-full ">
          <Title>First Name*</Title>
          <Input placeholder="Enter your first name" {...register("first_name")} />
          {errors.first_name && typeof errors.first_name.message === "string" && (
            <p className="text-red-400 text-sm">{errors.first_name.message}</p>
          )}
        </div>

        <div className="w-full mt-4">
          <Title>Last Name*</Title>
          <Input placeholder="Enter your last name" {...register("last_name")} />
          {errors.last_name && typeof errors.last_name.message === "string" && (
            <p className="text-red-400 text-sm">{errors.last_name.message}</p>
          )}
        </div>

        <div className="w-full mt-4">
          <Title>Email*</Title>
          <Input placeholder="Enter your email" type="email" {...register("email")} />
          {errors.email && typeof errors.email.message === "string" && (
            <p className="text-red-400 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="w-full mt-4">
          <Title>Phone*</Title>

          <div className="flex gap-2">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value as Country)}
              className="h-11 rounded-lg border border-white/10 bg-card px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary"
            >
              {getCountries().map((c) => (
                <option key={c} value={c}>
                  {c} +{getCountryCallingCode(c)}
                </option>
              ))}
            </select>

            <div className="flex-1">
              <Input placeholder="Enter your phone number" {...register("phone_number")} />
            </div>
          </div>

          {errors.phone_number && typeof errors.phone_number.message === "string" && (
            <p className="mt-1 text-sm text-red-400">{errors.phone_number.message}</p>
          )}
        </div>

        <div className="w-full mt-4">
          <Title>Message*</Title>

          <textarea
            placeholder="Enter your message"
            {...register("message")}
            className="w-full min-h-32 rounded-lg border border-white/10 bg-card px-4 py-3 text-sm text-foreground placeholder:text-secondary outline-none transition focus:ring-2 focus:ring-primary resize-none"
          />

          {errors.message && typeof errors.message.message === "string" && (
            <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
          )}
        </div>
        <Button type="submit" className="mt-6" disabled={isSubmitting}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
