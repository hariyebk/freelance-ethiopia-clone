import { createClient } from '@supabase/supabase-js'
import { Database } from '../../types/database.types'

const url = import.meta.env.VITE_SUPABASE_URL as string
const secret_key = import.meta.env.VITE_SUPABASE_KEY as string

const supabase = createClient<Database>(
    url,
    secret_key
)

export default supabase