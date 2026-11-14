import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type TrackSwitchProps = { eyebrow: string; title: string; text: string; cta: string; href: string };

// Closing banner on each career-path page that points to the other one.
export const TrackSwitch = ({ eyebrow, title, text, cta, href }: TrackSwitchProps) => (
    <section className="px-6 md:px-12 max-w-7xl mx-auto py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-[2.5rem] border border-accent/30 bg-accent/5 p-8 md:p-12">
            <div className="space-y-2 max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h3>
                <p className="text-muted-foreground">{text}</p>
            </div>
            <Link
                href={href}
                className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-8 h-12 font-semibold text-sm text-primary-foreground transition-transform hover:scale-105 active:scale-95"
            >
                {cta} <ArrowRight className="h-4 w-4" />
            </Link>
        </div>
    </section>
);

export const SiteFooter = ({ name, tagline, built }: { name: string; tagline: string; built: string }) => (
    <footer className="py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <p className="text-2xl font-bold tracking-tight">
                    Bio<span className="text-primary">AI</span>
                </p>
                <p className="text-muted-foreground mt-2 max-w-sm">{tagline}</p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
                <p className="text-sm font-medium">
                    © {new Date().getFullYear()} {name}
                </p>
                <p className="text-xs text-muted-foreground">{built}</p>
            </div>
        </div>
    </footer>
);
