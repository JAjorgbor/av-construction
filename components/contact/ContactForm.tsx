"use client";
import Button from "@/components/elements/Button";
import InputField from "@/components/elements/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";
import { toast } from "react-toastify";
import { z } from "zod";

const schema = z.object({
  firstName: z
    .string({ required_error: "First name is required." })
    .min(1, { message: "First name is required." }),
  lastName: z
    .string({ required_error: "Last name is required." })
    .min(1, { message: "Last name is required." }),
  email: z
    .string({ required_error: "Email address is required." })
    .min(1, { message: "Email address is required." }),
  message: z
    .string({ required_error: "Message is required." })
    .min(1, { message: "Message is required." }),
  phoneNumber: z.string(),
});

type FormFields = z.infer<typeof schema>;

const ContactForm = () => {
  const formMethods = useForm<FormFields>({ resolver: zodResolver(schema) });

  const handleSubmit = async (formData: FormFields) => {
    try {
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT as string;
      await axios.post(endpoint, formData);

      formMethods.reset();
      toast.success("Message sent successfully.");
    } catch (error: any) {
      toast.error(
        error?.data?.message ||
          error?.message ||
          "Something went wrong. Please try again later."
      );
    }
  };

  return (
    <form
      className="space-y-4"
      onSubmit={formMethods.handleSubmit(handleSubmit)}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <InputField
          type="text"
          label="First Name"
          isName
          placeholder="John"
          register={formMethods.register("firstName")}
          errorMessage={formMethods.formState.errors.firstName?.message}
        />
        <InputField
          type="text"
          label="Last Name"
          placeholder="Doe"
          isName
          register={formMethods.register("lastName")}
          errorMessage={formMethods.formState.errors.lastName?.message}
        />
        <InputField
          type="phoneNumber"
          label="Phone Number"
          placeholder="+234800 000 0000"
          register={formMethods.register("phoneNumber")}
          errorMessage={formMethods.formState.errors.phoneNumber?.message}
        />
        <InputField
          type="email"
          label="Email Address"
          placeholder="johndoe@example.com"
          register={formMethods.register("email")}
          errorMessage={formMethods.formState.errors.email?.message}
        />
        <InputField
          type="textarea"
          label="Message"
          placeholder="Enter message here"
          className="md:col-span-2"
          register={formMethods.register("message")}
          errorMessage={formMethods.formState.errors.message?.message}
        />
      </div>
      <Button
        endContent={<FiSend />}
        type="submit"
        isLoading={formMethods.formState.isSubmitting}
        className="w-1/4"
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
