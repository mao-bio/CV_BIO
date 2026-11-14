'use client';

import { Printer } from 'lucide-react';

export const PrintButton = ({ label }: { label: string }) => (
    <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 h-10 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
    >
        <Printer className="h-4 w-4" /> {label}
    </button>
);
