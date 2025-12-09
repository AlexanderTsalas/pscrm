import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ldbvxcavdrpjugoxzirk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkYnZ4Y2F2ZHJwanVnb3h6aXJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyNzgxODAsImV4cCI6MjA4MDg1NDE4MH0.HdizYBOZtP7pW4sBAk1_tBHOgJtO3y9QuQRforLkbvc';

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and Key are missing.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);