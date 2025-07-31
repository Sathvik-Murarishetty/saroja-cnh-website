import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(
  req: Request, 
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    
    // Validate ID is a number
    const jobId = parseInt(id);
    if (isNaN(jobId)) {
      return new NextResponse('Invalid ID', { status: 400 });
    }

    const { data: job, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('id', jobId)
      .single();

    if (error || !job) {
      return new NextResponse('Not Found', { status: 404 });
    }

    return NextResponse.json(job);
  } catch (error) {
    console.error('Database error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}