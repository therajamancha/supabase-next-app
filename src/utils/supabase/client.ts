import { createBrowserClient } from "@supabase/ssr";

// This is a client-side client for Supabase. It is used to interact with the database same as doing in react
export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
