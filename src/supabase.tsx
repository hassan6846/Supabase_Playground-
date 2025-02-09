
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = 'https://kdvpnabvbghzjhwsyzyr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkdnBuYWJ2Ymdoempod3N5enlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwOTg3ODksImV4cCI6MjA1NDY3NDc4OX0.acAubo4k9PJtJVOPS1t36wKn_hF8HDpHWVKS7TFwmmQ'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase