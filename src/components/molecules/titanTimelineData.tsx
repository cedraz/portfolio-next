import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';
import { ExperienceCarousel } from './ExperienceCarousel';
import { TimelineData } from './Timeline';
import { Linkedin } from 'lucide-react';
import { useFormattedExperienceDates } from '@/utils/format-time';
import { Badge } from '../ui/badge';

const BackendManagerData = () => {
  const t = useTranslations('Journey.timeline1');

  const technologies: string[] = [
    'typescript',
    'node.js',
    'strapi',
    'prisma',
    'fastify',
    'express',
    'postgresql',
    'docker',
    'swagger',
  ];

  return (
    <div className="flex flex-col">
      <p className="mt-3">{t('1.p')}</p>
      <div className="flex gap-2 mt-5 mb-7 flex-wrap">
        {technologies.map((tech, index) => (
          <Badge key={index} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};

const FulLStackDeveloperData = () => {
  const t = useTranslations('Journey.timeline1');

  const technologies: string[] = [
    'typescript',
    'node.js',
    'react',
    'next.js',
    'prisma',
    'postgresql',
    'docker',
    'swagger',
    'zod',
    'jest',
  ];

  return (
    <div className="flex mt-5 flex-col lg:flex-row gap-3">
      <ExperienceCarousel />
      <div className="flex flex-col gap-3 w-full lg:w-[30%]">
        <p className="mt-3">{t('2.p')}</p>
        <Button className="w-fit mt-3" asChild>
          <a
            href="https://www.linkedin.com/in/cedraz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5 me-2" />
            Linkedin
          </a>
        </Button>
        <div className="flex gap-2 mt-5 mb-7 flex-wrap">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export function TITANTimelineData() {
  const t = useTranslations('Journey.timeline1');

  const titanTimelineData: TimelineData[] = [
    {
      time: useFormattedExperienceDates({
        startDate: new Date(2024, 0, 1),
        endDate: new Date(2025, 1, 1),
      }),
      title: t('1.title'),
      children: <BackendManagerData />,
    },
    {
      time: useFormattedExperienceDates({
        startDate: new Date(2023, 8, 1),
      }),
      title: t('2.title'),
      children: <FulLStackDeveloperData />,
    },
    {
      time: useFormattedExperienceDates({
        startDate: new Date(2023, 4, 1),
        endDate: new Date(2023, 8, 30),
      }),
      title: t('3.title'),
      children: <></>,
    },
  ];

  const titanTime = useFormattedExperienceDates({
    startDate: new Date(2023, 4, 1),
  });

  return {
    titanTimelineData,
    titanTime,
  };
}
