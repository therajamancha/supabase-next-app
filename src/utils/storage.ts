"use client";
import type { Customer } from "../types/customer";

const STORAGE_KEY = "customers";

export const getCustomers = (): Customer[] => {
  const customers = window?.localStorage?.getItem(STORAGE_KEY);
  if (customers) {
    return JSON.parse(customers);
  }

  // Static customer data
  const staticCustomers: Customer[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      age: 30,
      gender: "Male",
      contactPreference: "Email",
      hobbies: ["Sports", "Gaming"],
      bio: "Software engineer who loves coding",
      dateOfBirth: "1993-05-15",
      newsletterSubscription: true,
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      password: "password456",
      age: 25,
      gender: "Female",
      contactPreference: "Phone",
      hobbies: ["Reading", "Traveling"],
      bio: "Digital marketing specialist",
      dateOfBirth: "1998-08-22",
      newsletterSubscription: false,
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike@example.com",
      password: "password789",
      age: 35,
      gender: "Male",
      contactPreference: "SMS",
      hobbies: ["Sports", "Reading"],
      bio: "Fitness trainer",
      dateOfBirth: "1988-12-10",
      newsletterSubscription: true,
    },
    {
      id: "4",
      name: "Sarah Williams",
      email: "sarah@example.com",
      password: "password321",
      age: 28,
      gender: "Female",
      contactPreference: "Email",
      hobbies: ["Gaming", "Reading"],
      bio: "Graphic designer",
      dateOfBirth: "1995-03-18",
      newsletterSubscription: true,
    },
    {
      id: "5",
      name: "David Brown",
      email: "david@example.com",
      password: "password654",
      age: 42,
      gender: "Male",
      contactPreference: "Phone",
      hobbies: ["Traveling", "Sports"],
      bio: "Business consultant",
      dateOfBirth: "1981-07-25",
      newsletterSubscription: false,
    },
    {
      id: "6",
      name: "Emily Davis",
      email: "emily@example.com",
      password: "password987",
      age: 31,
      gender: "Female",
      contactPreference: "SMS",
      hobbies: ["Reading", "Gaming"],
      bio: "Content writer",
      dateOfBirth: "1992-09-30",
      newsletterSubscription: true,
    },
    {
      id: "7",
      name: "James Wilson",
      email: "james@example.com",
      password: "passwordabc",
      age: 38,
      gender: "Male",
      contactPreference: "Email",
      hobbies: ["Sports", "Traveling"],
      bio: "Sales manager",
      dateOfBirth: "1985-11-05",
      newsletterSubscription: false,
    },
    {
      id: "8",
      name: "Lisa Anderson",
      email: "lisa@example.com",
      password: "passworddef",
      age: 27,
      gender: "Female",
      contactPreference: "Phone",
      hobbies: ["Gaming", "Reading"],
      bio: "UX designer",
      dateOfBirth: "1996-02-14",
      newsletterSubscription: true,
    },
    {
      id: "9",
      name: "Robert Taylor",
      email: "robert@example.com",
      password: "passwordghi",
      age: 45,
      gender: "Male",
      contactPreference: "SMS",
      hobbies: ["Traveling", "Sports"],
      bio: "Project manager",
      dateOfBirth: "1978-04-20",
      newsletterSubscription: true,
    },
    {
      id: "10",
      name: "Emma Moore",
      email: "emma@example.com",
      password: "passwordjkl",
      age: 29,
      gender: "Female",
      contactPreference: "Email",
      hobbies: ["Reading", "Gaming"],
      bio: "Marketing coordinator",
      dateOfBirth: "1994-06-08",
      newsletterSubscription: false,
    },
    {
      id: "11",
      name: "Thomas Clark",
      email: "thomas@example.com",
      password: "passwordmno",
      age: 33,
      gender: "Male",
      contactPreference: "Phone",
      hobbies: ["Sports", "Traveling"],
      bio: "Software developer",
      dateOfBirth: "1990-01-15",
      newsletterSubscription: true,
    },
    {
      id: "12",
      name: "Sophie White",
      email: "sophie@example.com",
      password: "passwordpqr",
      age: 26,
      gender: "Female",
      contactPreference: "SMS",
      hobbies: ["Gaming", "Reading"],
      bio: "Data analyst",
      dateOfBirth: "1997-10-12",
      newsletterSubscription: true,
    },
  ];

  // Save static customers to localStorage
  window?.localStorage?.setItem(STORAGE_KEY, JSON.stringify(staticCustomers));
  return staticCustomers;
};

export const saveCustomer = (customer: Customer): void => {
  const customers = getCustomers();
  const existingIndex = customers.findIndex((c) => c.id === customer.id);

  if (existingIndex >= 0) {
    customers[existingIndex] = customer;
  } else {
    customers.push(customer);
  }

  window?.localStorage?.setItem(STORAGE_KEY, JSON.stringify(customers));
};

export const deleteCustomer = (id: string): void => {
  const customers = getCustomers().filter((c) => c.id !== id);
  window?.localStorage?.setItem(STORAGE_KEY, JSON.stringify(customers));
};

export const getCustomerById = (id: string): Customer | undefined => {
  return getCustomers().find((c) => c.id === id);
};
