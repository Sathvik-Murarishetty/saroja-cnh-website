import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';

interface Job {
    id: string;
    title: string;
    location: string;
    job_type: string;
    description: string;
    created_at: string;
}

async function getJob(id: string): Promise<Job> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/api/jobs/${id}`, {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Job not found');
    return res.json();
}

export default async function JobDetail({
    params
}: {
    params: Promise<{ id: string }>
}) {
    // Await the params Promise
    const { id } = await params;
    const job = await getJob(id);

    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <Link href="/careers" className="text-sm text-accent-orange hover:underline mb-6 inline-block">
                ← Back to Careers
            </Link>

            <h1 className="text-4xl font-serif font-semibold mb-2 text-[var(--foreground)]">
                {job.title}
            </h1>

            <p className="text-gray-600 mb-1">
                {job.location} • {job.job_type}
            </p>

            <p className="text-sm text-gray-500 mb-6">
                Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}
            </p>

            <p className="whitespace-pre-line text-[var(--foreground)] leading-relaxed">
                {job.description}
            </p>
        </div>
    );
}