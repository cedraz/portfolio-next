import React from 'react';

// Components
import Card from '@/components/molecules/Card';
import { GithubRepositoryCardData } from '@/types/interfaces';

export default function CardsGroup({
  projects,
}: {
  projects: GithubRepositoryCardData[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {projects.map((project: GithubRepositoryCardData) => (
        <Card key={project.id} {...project} />
      ))}
    </div>
  );
}
