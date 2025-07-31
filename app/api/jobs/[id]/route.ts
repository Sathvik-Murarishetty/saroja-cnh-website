import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(req: Request, context: any) {
  try {
    const id = context.params.id;
    
    // Validate ID is a number
    const jobId = parseInt(id);
    if (isNaN(jobId)) {
      return new NextResponse('Invalid ID', { status: 400 });
    }

    const { rows } = await sql`SELECT * FROM jobs WHERE id = ${jobId}`;
    
    if (rows.length === 0) {
      return new NextResponse('Not Found', { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error('Database error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}