import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  try {
    const { data: jobs, error } = await supabase
      .from('jobs')
      .select('id, title, location, job_type, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json([]);
    }

    return NextResponse.json(jobs || []);
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json([]);
  }
}