import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ksxakauxekfoadroeilw.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzeGFrYXV4ZWtmb2Fkcm9laWx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkyNzIwODMsImV4cCI6MjAwNDg0ODA4M30.kd8mpSrfhAQZPgp1FqfT0qToSR42mZZcyHllnRIF1Mk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
