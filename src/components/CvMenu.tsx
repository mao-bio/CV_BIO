'use client';

import { Activity, Database, Download, Eye } from 'lucide-react';
import Link from 'next/link';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

export type CvLink = {
    label: string;
    href: string;
    /** File name to save as. Omit for links that open a page. */
    download?: string;
    icon: 'bio' | 'data' | 'pdf' | 'view';
};

const icons = { bio: Activity, data: Database, pdf: Download, view: Eye };

export const CvMenuItems = ({ links }: { links: CvLink[] }) => (
    <>
        {links.map((link) => {
            const Icon = icons[link.icon];
            const className = 'flex items-center gap-2 p-2 rounded-lg cursor-pointer';
            return (
                <DropdownMenuItem key={link.href} asChild>
                    {link.download ? (
                        <a href={link.href} download={link.download} className={className}>
                            <Icon className="h-4 w-4 text-primary" />
                            <span className="font-medium text-sm">{link.label}</span>
                        </a>
                    ) : (
                        <Link href={link.href} className={className}>
                            <Icon className="h-4 w-4 text-accent" />
                            <span className="font-medium text-sm">{link.label}</span>
                        </Link>
                    )}
                </DropdownMenuItem>
            );
        })}
    </>
);
