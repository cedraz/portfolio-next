'use client';
import * as React from 'react';

// Components
import { buttonVariants } from '../ui/button';
import { GlowingImage } from '../atoms/GlowingImage';
import { Badge } from '../ui/badge';

// Phosphor icons
import { GitBranch, Link } from '@phosphor-icons/react';

// Types
import { GithubRepositoryCardData } from '@/types/interfaces';

export default function Card(project: GithubRepositoryCardData) {
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
    <div
      className="bg-black border border-white rounded-lg flex flex-col"
      data-aos="fade-up"
    >
      <GlowingImage
        classNameExternal="w-full max-h-[292px] object-cover rounded-t-lg"
        image={project.image}
        alt={project.name}
      />
      <div className="p-6 flex flex-col h-full">
        <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {project.name}
        </h5>
        <Badge className="w-fit hover:disabled">{project.stack}</Badge>
        <p className="text-justify font-normal text-gray-400 mt-4">
          {project.description}
        </p>
        <div className="flex gap-2 mt-5 mb-7 flex-wrap">
          {project.topics.map((topic, index) => (
            <Badge key={index} variant="secondary">
              {topic}
            </Badge>
          ))}
        </div>
        <div className="mt-auto gap-3 xs:gap-0 flex xs:flex-row justify-between">
          <a
            href={project.repo_url}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: 'outline' })}
          >
            Github
            <GitBranch className="ml-2" size={22} />
          </a>
          {project.external_url && (
            <a
              href={project.external_url}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: 'default' })}
            >
              Link
              <Link className="ml-2" size={22} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
