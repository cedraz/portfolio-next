import * as React from 'react';

// Components
import { Timeline, TimelineData } from '../molecules/Timeline';

// next intl
import { useTranslations, useLocale } from 'next-intl';
import pt from '@/utils/messages/pt.json';
import en from '@/utils/messages/en.json';
import { useFormattedExperienceDates } from '@/utils/format-time';

const Data1 = () => {
  const t = useTranslations('Journey.timeline2');
  const locale = useLocale();

  return (
    <div className="flex flex-col">
      <p className="mt-3">{t('1.p')}</p>
      <ul className="list-inside list-disc flex flex-col gap-2 mt-3">
        {locale === 'pt'
          ? pt['Journey']['timeline2']['1']['lis'].map(
              (item: string, index: number) => <li key={index}>{item}</li>,
            )
          : en['Journey']['timeline2']['1']['lis'].map(
              (item: string, index: number) => <li key={index}>{item}</li>,
            )}
      </ul>
    </div>
  );
};

export function Education() {
  const t = useTranslations('Journey.timeline2');

  const timelineData: TimelineData[] = [
    {
      time: t('1.time'),
      title: t('1.title'),
      children: <Data1 />,
    },
    {
      time: t('2.time'),
      title: t('2.title'),
      children: <></>,
    },
  ];

  const ufbaTime = useFormattedExperienceDates({
    startDate: new Date(2022, 7, 1),
  });

  return <Timeline time={ufbaTime} data={timelineData} />;
}
