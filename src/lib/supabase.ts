import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wkitbelqciqpglxrvoio.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndraXRiZWxxY2lxcGdseHJ2b2lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU1NDgzMTcsImV4cCI6MjExMTEyNDMxN30.FZXFnz2fywTRwRjb53TUfAHMp9EHNqjER1rncdbQaPM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});