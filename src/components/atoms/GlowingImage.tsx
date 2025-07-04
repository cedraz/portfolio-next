'use client';
import * as React from 'react';

// Next
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

const className = `
    border-0
    max-h-[400px]
    before:h-full before:left-0 before:top-0 before:w-full before:absolute
    before:bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.1),transparent_40%)] relative
    before:opacity-0 transition-opacity duration-500 hover:before:opacity-100 border-gray-200 shadow
`;

type GlowingImageProps = {
  image: StaticImageData;
  alt: string;
  classNameExternal?: string;
};

export function GlowingImage({
  alt,
  image,
  classNameExternal,
}: GlowingImageProps) {
  const divRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLDivElement;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      target.style.setProperty('--mouse-x', `${x}px`);
      target.style.setProperty('--mouse-y', `${y}px`);
    };

    const div = divRef.current;
    if (div) {
      div.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (div) {
        div.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div ref={divRef} className={className}>
      <Image
        src={image}
        alt={alt}
        className={cn('rounded-t-lg w-full', classNameExternal)}
      />
    </div>
  );
}
