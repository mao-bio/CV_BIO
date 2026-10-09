'use client';

import { MotionConfig } from 'framer-motion';

// Disables transform/layout animations for visitors who prefer reduced motion.
export const MotionProvider = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);
