import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Custom fetch wrapper to handle slow network/Supabase cold start timeouts
const customFetch = async (url: RequestInfo | URL, options?: RequestInit) => {
  const timeoutMs = 30000; // 30 second timeout
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  } catch (err: any) {
    clearTimeout(id);
    if (err.name === 'AbortError') {
      console.warn(`[Supabase] Request timed out after ${timeoutMs}ms, throwing custom error.`);
      throw new Error(`Connection timed out. Please try again.`);
    }
    throw err;
  }
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: {
    fetch: customFetch,
  }
});
