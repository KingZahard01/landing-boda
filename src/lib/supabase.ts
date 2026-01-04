
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    // We don't throw an error here to prevent the app from crashing if keys are missing,
    // but functionality will fail if used.
    console.warn('Supabase URL or Key is missing. Check your .env.local file.')
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')

