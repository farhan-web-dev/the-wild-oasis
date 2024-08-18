import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mxzkhcghczqqxmpiotao.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14emtoY2doY3pxcXhtcGlvdGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwNzg2NDgsImV4cCI6MjAzNzY1NDY0OH0.YUXfvo9dcVVe3iUbqeEClcluwcZ7aAVUhf4yYfD9JQQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
