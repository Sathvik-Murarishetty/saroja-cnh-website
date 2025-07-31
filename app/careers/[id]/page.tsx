import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { Header } from '@/components/header';

interface Job {
    id: string;
    title: string;
    location: string;
    job_type: string;
    description: string;
    created_at: string;
}

async function getJob(id: string): Promise<Job> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/${id}`, {
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
    const { id } = await params;
    const job = await getJob(id);

    return (
        <div>
            <Header />

            <div className="max-w-3xl mx-auto pt-25 px-6">
                <Link href="/careers" className="text-sm text-[var(--accent-orange)] hover:underline mb-6 inline-block">
                    ← Back to Careers
                </Link>

                <h1 className="text-4xl font-serif font-semibold mb-4 text-[var(--foreground)]">
                    {job.title}
                </h1>

                <div className="space-y-3 text-[var(--foreground)]">
                    <p><strong>Location:</strong> {job.location}</p>
                    <p><strong>Type:</strong> {job.job_type}</p>
                    <p><strong>Job ID:</strong> {job.id}</p>
                    <p><strong>Posted:</strong> {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}</p>
                    <div className="pt-4">
                        <p className="font-semibold mb-2">Description:</p>
                        <p className="whitespace-pre-line leading-relaxed text-[var(--foreground)]">
                            {job.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}