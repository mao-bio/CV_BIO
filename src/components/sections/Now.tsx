import Link from 'next/link';
import { Activity, ArrowRight, BrainCircuit, Globe2, Languages } from 'lucide-react';
import type { Content } from '@/content';

const icons = [Activity, BrainCircuit, Globe2, Languages];

type NowProps = {
    now: Content['home']['now'];
    links: { label: string; href: string }[];
};

// "What I'm looking for now": tells a recruiter in a few seconds whether an opening fits.
export const NowSection = ({ now, links }: NowProps) => (
    <section id="disponibilidad" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="rounded-[2.5rem] border border-primary/15 bg-card/50 backdrop-blur-md p-8 md:p-12">
            <div className="max-w-2xl space-y-4 mb-10">
                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">{now.eyebrow}</h2>
                <h3 className="text-4xl md:text-5xl font-bold">{now.title}</h3>
                <p className="text-muted-foreground text-lg">{now.intro}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {now.items.map((item, index) => {
                    const Icon = icons[index % icons.length];
                    return (
                        <div key={item.title} className="flex gap-4">
                            <div className="flex-shrink-0 h-fit p-3 rounded-2xl bg-primary/10 text-primary">
                                <Icon className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">{item.title}</h4>
                                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
                {links.map((link, index) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={
                            index === 0
                                ? 'inline-flex items-center gap-2 rounded-full bg-primary px-6 h-12 font-semibold text-sm text-primary-foreground transition-transform hover:scale-105 active:scale-95'
                                : 'inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 h-12 font-semibold text-sm hover:bg-muted transition-colors'
                        }
                    >
                        {link.label} <ArrowRight className="h-4 w-4" />
                    </Link>
                ))}
            </div>
        </div>
    </section>
);
