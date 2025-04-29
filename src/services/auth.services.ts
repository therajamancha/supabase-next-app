import { toast } from "sonner";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    toast.error(error.message);
    throw error;
  }
  toast.success("Login successful");
  return data;
};

export const signUp = async ({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: name,
      },
      emailRedirectTo: `${window.location.origin}/admin`,
    },
  });

  if (error) {
    toast.error(error.message);
    throw error;
  }
  toast.success("Signup successful");

  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    toast.error(error.message);
    throw error;
  }
  toast.success("Logout successful");
};

export const getUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    toast.error(error.message);
    throw error;
  }
  return data;
};

export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    toast.error(error.message);
    throw error;
  }
  return data;
};
