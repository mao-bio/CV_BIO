'use client';

import { track } from '@vercel/analytics';
import type { AnchorHTMLAttributes } from 'react';

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    /** Event name shown in Vercel Web Analytics. */
    event: string;
    data?: Record<string, string>;
};

// A plain link that also reports the click, for use inside server components.
export const TrackedLink = ({ event, data, onClick, ...props }: TrackedLinkProps) => (
    <a
        {...props}
        onClick={(e) => {
            track(event, data);
            onClick?.(e);
        }}
    />
);
