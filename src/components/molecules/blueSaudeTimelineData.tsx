import { useTranslations } from 'next-intl';
import { TimelineData } from './Timeline';
import { useFormattedExperienceDates } from '@/utils/format-time';
import { Badge } from '../ui/badge';

const BlueSaudeData = () => {
  const t = useTranslations('Journey.bluesaude');

  const technologies: string[] = [
    'nest.js',
    'prisma',
    'postgresql',
    'redis',
    'rabbitmq',
    'bullmq',
    'stripe',
    'docker swarm',
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

export function BlueSaudeTimelineData() {
  const t = useTranslations('Journey.bluesaude');

  const blueSaudeTimelineData: TimelineData[] = [
    {
      time: useFormattedExperienceDates({
        startDate: new Date(2025, 2, 1),
      }),
      title: t('1.title'),
      children: <BlueSaudeData />,
    },
  ];

  const blueSaudeTime = useFormattedExperienceDates({
    startDate: new Date(2025, 2, 1),
  });

  return {
    blueSaudeTimelineData,
    blueSaudeTime,
  };
}
