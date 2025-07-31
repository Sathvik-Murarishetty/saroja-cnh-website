// app/careers/page.tsx
import { Header } from '@/components/header';
import { PhotoGrid } from '@/components/photo-grid';
import Image from 'next/image';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';

interface Job {
    id: number;
    title: string;
    location: string;
    job_type: string;
    created_at?: string;
}

async function getJobs(): Promise<Job[]> {
    try {
        // Use absolute URL for production, fallback for development
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://saroja-cnh-website.vercel.app';

        const res = await fetch(`${baseUrl}/api/jobs`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            console.warn(`Jobs API failed with status: ${res.status}`);
            return [];
        }

        const data = await res.json();

        // Ensure we return an array
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error('Error fetching jobs:', error);
        // Return empty array instead of crashing the page
        return [];
    }
}

export default async function CareersPage() {
    const jobs = await getJobs();

    return (
        <div>
            <Header />
            <section id="careers-content" className="mx-auto max-w-7xl px-6 pt-25">
                <h2 className="text-5xl font-semibold font-serif leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl text-center mb-10">
                    Careers @ Saroja C&H
                </h2>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-20 flex flex-col lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">
                <div className="w-full lg:w-1/2 space-y-6">
                    <p className="text-lg text-[var(--foreground)] leading-relaxed">
                        We&apos;re always on the lookout for passionate, committed individuals who want to grow in the hospitality and food services industry.
                        <br />
                        We believe in connecting early with talented people who align with our values of quality, care, and consistency.
                    </p>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative w-full h-64">
                        <Image
                            src="/careers.png"
                            alt="Hospitality & Hostel Services"
                            fill
                            className="object-contain rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-7xl px-6 py-10">
                <h1 className="text-4xl font-serif font-semibold text-center mb-10">Open Positions</h1>

                {jobs.length === 0 ? (
                    <div className="text-center space-y-6">
                        <p className="text-lg text-[var(--foreground)] leading-relaxed">
                            Currently, we don&apos;t have any open positions, but we&apos;re always looking for talented individuals to join our team in the future.
                        </p>
                        <div className="flex justify-center">
                            <button
                                className="group/btn relative block h-10 w-auto px-5 rounded-md bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                                type="submit"
                            >
                                📞 Contact Us &rarr;
                                <BottomGradient />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {jobs.map((job) => (
                            <div key={job.id} className="border p-4 rounded-xl shadow hover:shadow-md transition">
                                <h2 className="text-xl font-semibold">{job.title}</h2>
                                <p className="text-sm text-gray-600">{job.location}</p>
                                <p className="text-sm mt-1">{job.job_type}</p>
                                {job.created_at && (
                                    <p className="text-xs text-gray-400 mt-1">
                                        Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}
                                    </p>
                                )}
                                <Link
                                    href={`/careers/${job.id}`}
                                    className="inline-block mt-4 text-accent-orange hover:underline"
                                >
                                    View Details
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <section id="work-photos" className="mx-auto max-w-7xl px-6 pt-15">
                <h2 className="text-5xl font-semibold font-serif leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl text-center mb-10">
                    Life at Saroja C&H
                </h2>
            </section>
            <PhotoGrid />
        </div>
    );
}

const BottomGradient = () => (
    <>
        <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[var(--accent-orange)] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
        <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
);