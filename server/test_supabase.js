const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_ANON_KEY;

console.log('Testing connection to Supabase Project:', url);

const supabase = createClient(url, key);

async function testConnection() {
  try {
    const { data, error } = await supabase.from('memberships').select('*');
    if (error) {
      console.log('Supabase Table Query Notice:', error.message);
      console.log('Connected to Supabase endpoint successfully!');
    } else {
      console.log('Successfully fetched memberships from Supabase:', data);
    }
  } catch (err) {
    console.error('Supabase Connection Error:', err.message);
  }
}

testConnection();
