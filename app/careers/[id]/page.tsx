import { sql } from '@vercel/postgres';
import { notFound } from 'next/navigation';

export default async function JobDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const { rows } = await sql`SELECT * FROM jobs WHERE id = ${id}`;
  const job = rows[0];

  if (!job) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
      <p className="text-xl text-gray-600 mb-2">📍 {job.location}</p>
      <p className="text-gray-800 whitespace-pre-line mb-8">{job.description}</p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-2 rounded"
        />
        <textarea
          placeholder="Why do you want to join?"
          className="w-full border border-gray-300 p-2 rounded"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-[var(--accent-orange)] text-white rounded hover:opacity-90"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}