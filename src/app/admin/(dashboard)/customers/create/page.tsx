"use client";

import React from "react";
import { CustomerForm } from "@/components/forms/customer-form";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomerFormData, customerSchema } from "@/lib/validations/customer";
import { createCustomer } from "@/services/customer.services";
import { useRouter } from "next/navigation";

const CreateCustomer = () => {
  const router = useRouter();
  const form = useForm<CustomerFormData>({
    resolver: zodResolver(customerSchema),
    defaultValues: {},
  });

  const handleSubmit = async (data: CustomerFormData) => {
    try {
      const response = await createCustomer(data);
      if (response) {
        router.push("/admin/customers");
      } else {
        console.log("Error creating customer");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CustomerForm form={form} title="Create Customer" />
        </form>
      </Form>
    </div>
  );
};

export default CreateCustomer;
