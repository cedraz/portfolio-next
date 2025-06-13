import { useTranslations } from 'next-intl';
import { TimelineData } from './Timeline';
import { useFormattedExperienceDates } from '@/utils/format-time';
import { Badge } from '../ui/badge';

const WarlocksData = () => {
  const t = useTranslations('Journey.warlocks');

  const technologies: string[] = [
    'nest.js',
    'prisma',
    'postgresql',
    'redis',
    'docker',
    'rabbitmq',
    'discord.js',
    'sapphire.js',
    'react',
    'next.js',
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

export function WarlocksTimelineData() {
  const t = useTranslations('Journey.warlocks');

  const warlocksTimelineData: TimelineData[] = [
    {
      time: useFormattedExperienceDates({
        startDate: new Date(2024, 5, 1),
        endDate: new Date(2025, 1, 1),
      }),
      title: t('1.title'),
      children: <WarlocksData />,
    },
  ];

  const warlocksTime = useFormattedExperienceDates({
    startDate: new Date(2024, 5, 1),
    endDate: new Date(2025, 1, 1),
  });

  return {
    warlocksTimelineData,
    warlocksTime,
  };
}
