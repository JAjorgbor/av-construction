"use client";
import Button from "@/components/elements/Button";
import InputField from "@/components/elements/InputField";
import React from "react";
import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const formMethods = useForm();
  return (
    <form className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <InputField
          type="text"
          label="First Name"
          isName
          placeholder="John"
          register={formMethods.register("firstName", {
            required: "First name is required",
          })}
          errorMessage={formMethods.formState.errors.firstName?.message}
        />
        <InputField
          type="text"
          label="Last Name"
          placeholder="Doe"
          isName
          register={formMethods.register("lastName", {
            required: "Last name is required",
          })}
          errorMessage={formMethods.formState.errors.lastName?.message}
        />
        <InputField
          type="phoneNumber"
          label="Phone Number"
          placeholder="+234800 000 0000"
          register={formMethods.register("phoneNumber", {
            required: "Phone number is required",
          })}
          errorMessage={formMethods.formState.errors.phoneNumber?.message}
        />
        <InputField
          type="email"
          label="Email Address"
          placeholder="johndoe@example.com"
          register={formMethods.register("email", {
            required: "Email address is required",
          })}
          errorMessage={formMethods.formState.errors.email?.message}
        />
        <InputField
          type="textarea"
          label="Message"
          placeholder="Enter message here"
          className="md:col-span-2"
          register={formMethods.register("email", {
            required: "Email address is required",
          })}
          errorMessage={formMethods.formState.errors.email?.message}
        />
      </div>
      <Button endContent={<FiSend />}>Submit</Button>
    </form>
  );
};

export default ContactForm;
