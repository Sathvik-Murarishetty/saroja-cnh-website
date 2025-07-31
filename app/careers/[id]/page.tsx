// app/careers/[id]/page.tsx

import { sql } from '@vercel/postgres';
import { notFound } from 'next/navigation';
import { formatDistanceToNow } from 'date-fns';

export default async function JobDetailsPage({
    params,
}: {
    params: { id: string };
}) {
    const jobId = parseInt(params.id);
    if (isNaN(jobId)) return notFound();

    const { rows } = await sql`
    SELECT id, title, location, description, job_type, created_at
    FROM jobs
    WHERE id = ${jobId}
  `;

    if (rows.length === 0) return notFound();

    const job = rows[0];

    return (
        <div className="max-w-3xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
            <p className="text-gray-600 text-sm mb-1">📍 {job.location}</p>

            {job.job_type && (
                <p className="inline-block mb-2 bg-[var(--accent-sage)] text-white text-xs px-3 py-1 rounded-full">
                    {job.job_type}
                </p>
            )}

            <p className="text-gray-400 text-xs mt-1 mb-6">
                Posted {formatDistanceToNow(new Date(job.created_at))} ago
            </p>

            <div className="prose prose-lg max-w-none mb-10">
                <p>{job.description}</p>
            </div>

            <form className="space-y-4">
                <h2 className="text-2xl font-semibold">Apply Now</h2>
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border px-4 py-2 rounded-md"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border px-4 py-2 rounded-md"
                />
                <textarea
                    placeholder="Why should we consider you?"
                    rows={4}
                    className="w-full border px-4 py-2 rounded-md"
                ></textarea>
                <button
                    type="submit"
                    className="bg-[var(--accent-orange)] hover:bg-[var(--accent-gold)] text-white px-5 py-2 rounded-md"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
}
