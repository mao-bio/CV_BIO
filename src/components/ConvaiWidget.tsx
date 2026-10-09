'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

const AGENT_ID = 'agent_2601kf4fhhr2ecmteasabjm1d6kr';

export const ConvaiWidget = () => {
  const convaiRef = useRef<HTMLElement>(null);

  useEffect(() => {
    convaiRef.current?.setAttribute('agent-id', AGENT_ID);
  }, []);

  return (
    <>
      <elevenlabs-convai ref={convaiRef}></elevenlabs-convai>
      <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed@0.19.0" strategy="lazyOnload" />
    </>
  );
};
