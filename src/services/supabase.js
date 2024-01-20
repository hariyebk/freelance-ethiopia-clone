
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tzgtzfeuulrtldeifsls.supabase.co'
// eslint-disable-next-line
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase