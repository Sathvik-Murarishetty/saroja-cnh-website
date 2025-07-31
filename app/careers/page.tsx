// app/careers/page.tsx
import { Header } from '@/components/header';
import { PhotoGrid } from '@/components/photo-grid';
import Image from 'next/image';
import { sql } from '@vercel/postgres';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';

export default async function CareersPage() {
    const { rows: jobs } = await sql`
    SELECT id, title, location, job_type, created_at FROM jobs ORDER BY created_at DESC
  `;

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
                        We’re always on the lookout for passionate, committed individuals who want to grow in the hospitality and food services industry.
                        <br />
                        We believe in connecting early with talented people who align with our values of quality, care, and consistency.
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

                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative w-full h-96">
                        <Image
                            src="/careers.png"
                            alt="Hospitality & Hostel Services"
                            fill
                            className="object-contain rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-7xl px-6 py-16">
                <h1 className="text-4xl font-serif font-semibold text-center mb-10">Open Positions</h1>

                {jobs.length === 0 ? (
                    <div>
                        <p className="text-lg text-[var(--foreground)] leading-relaxed">
                            Currently, we don’t have any open positions, but we’re always looking for talented individuals to join our team in the future.
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                            <div key={job.id} className="bg-white border rounded-xl p-5 shadow-sm flex flex-col justify-between">
                                <div>
                                    <h2 className="text-xl font-bold">{job.title}</h2>
                                    <p className="text-sm text-gray-600">📍 {job.location}</p>
                                    {job.job_type && (
                                        <span className="inline-block mt-1 bg-[var(--accent-sage)] text-white text-xs px-2 py-1 rounded-full">
                                            {job.job_type}
                                        </span>
                                    )}
                                    <p className="text-xs text-gray-400 mt-1">Job ID: {job.id}</p>
                                    <p className="text-xs text-gray-400">
                                        Posted {formatDistanceToNow(new Date(job.created_at))} ago
                                    </p>
                                </div>
                                <Link
                                    href={`/careers/${job.id}`}
                                    className="mt-4 text-sm text-white font-medium bg-[var(--accent-orange)] hover:bg-[var(--accent-gold)] px-4 py-2 rounded-md text-center"
                                >
                                    Apply Now →
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