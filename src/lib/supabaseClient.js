import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    'https://bdgrzywumdfuxrlsyyxi.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkZ3J6eXd1bWRmdXhybHN5eXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NTg4NjksImV4cCI6MjA1MjQzNDg2OX0.CfMRHLIqiyazh7Hkn9M9Zo4cVKJWTJSA5GwZaZxGfMc'
)