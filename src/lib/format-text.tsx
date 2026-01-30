import React from 'react';

/**
 * Parses a string and returns an array of React elements, 
 * replacing **text** with <strong className="font-bold text-foreground">text</strong>
 */
export const formatMarkdown = (text: string) => {
    if (!text) return null;

    // Split by **text**
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return (
                <strong key={i} className="font-bold text-foreground">
                    {part.slice(2, -2)}
                </strong>
            );
        }
        return part;
    });
};
