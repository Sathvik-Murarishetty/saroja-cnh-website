import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(req: Request, context: any) {
  const id = context.params.id;

  const { rows } = await sql`SELECT * FROM jobs WHERE id = ${id}`;
  if (rows.length === 0) {
    return new NextResponse('Not Found', { status: 404 });
  }

  return NextResponse.json(rows[0]);
}