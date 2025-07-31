import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const { rows } = await sql`SELECT * FROM jobs WHERE id = ${id}`;
  if (rows.length === 0) {
    return new NextResponse('Not Found', { status: 404 });
  }

  return NextResponse.json(rows[0]);
}