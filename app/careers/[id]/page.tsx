import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { Header } from '@/components/header';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            console.log("Form submitted");
        };

    return (
        <div>
            <Header />

            <div className="max-w-3xl mx-auto pt-25 px-6">
                <Link href="/careers" className="text-md text-[var(--accent-orange)] hover:underline mb-6 inline-block">
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

            <div className="w-full flex justify-center">
                <h1 className="text-2xl font-serif font-semibold mb-4 text-[var(--foreground)]">
                    Apply for this job
                </h1>
                <form className="my-8" onSubmit={handleSubmit}>
                    <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input id="firstname" placeholder="Saroja" type="text" />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input id="lastname" placeholder="Caterers" type="text" />
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="123-456-7890" type="number" />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" placeholder="email@email.com" type="email" />
                    </LabelInputContainer>

                    <button
                        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                        type="submit"
                    >
                        Submit &rarr;
                        <BottomGradient />
                    </button>

                    <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

                </form>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[var(--accent-orange)] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};