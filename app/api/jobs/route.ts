import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
  const { rows } = await sql`SELECT id, title, location, job_type FROM jobs ORDER BY created_at DESC`;
  return NextResponse.json(rows);
}