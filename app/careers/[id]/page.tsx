// app/careers/[id]/page.tsx

import { sql } from '@vercel/postgres';
import { notFound } from 'next/navigation';

export default async function JobDetailsPage({ params }) {
    const { id } = params;

    const { rows } = await sql`SELECT * FROM jobs WHERE id = ${id}`;
    const job = rows[0];

    if (!job) return notFound();

    return (
        <div className="max-w-3xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-serif font-semibold mb-4">{job.title}</h1>
            <p className="text-sm text-gray-500 mb-2">📍 {job.location}</p>
            <p className="text-sm text-gray-400 mb-8">Job ID: {job.id}</p>

            <div className="prose mb-12 text-[var(--foreground)]">
                <p>{job.description}</p>
            </div>

            <form className="space-y-4 max-w-xl">
                <input type="text" placeholder="Your Name" required className="w-full border px-4 py-2 rounded-md" />
                <input type="email" placeholder="Your Email" required className="w-full border px-4 py-2 rounded-md" />
                <textarea placeholder="Cover Letter or Message" rows={4} className="w-full border px-4 py-2 rounded-md" />
                <input type="file" className="w-full" />
                <button
                    type="submit"
                    className="bg-[var(--accent-orange)] hover:bg-[var(--accent-gold)] text-white px-6 py-2 rounded-md font-medium"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
}