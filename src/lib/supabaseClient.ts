import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseUrl) {
	console.log("Missing environment variable NEXT_PUBLIC_SUPABASE_URL");
}
if (!supabaseAnonKey) {
	console.log("Missing environment variable NEXT_PUBLIC_SUPABASE_ANON_KEY");
}

export const client = createClient(supabaseUrl, supabaseAnonKey);
