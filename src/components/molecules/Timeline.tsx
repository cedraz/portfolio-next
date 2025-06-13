import * as React from 'react';

import { TimelineItem, TimelineItemProps } from '../atoms/TimelineItem';
import Image, { StaticImageData } from 'next/image';

export type TimelineData = Omit<TimelineItemProps, 'order'>;

interface TimelineProps {
  data: TimelineData[];
  logo?: StaticImageData;
  time: string;
  company?: string;
}

export function Timeline({ data, logo, time, company }: TimelineProps) {
  const getOrder = (index: number) => {
    if (index === data.length - 1) {
      return 'initial';
    }

    if (index === 0) {
      return 'final';
    }

    return null;
  };

  return (
    <div>
      {logo && (
        <div className="flex items-center gap-4 mb-4">
          <Image src={logo} alt="logo" className="w-[48px]" />
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
              {company}
            </h1>
            <span className="text-sm">{time}</span>
          </div>
        </div>
      )}
      <ol className="relative border-s border-white ml-6">
        {data.map((item, index) => (
          <TimelineItem key={index} {...item} order={getOrder(index)} />
        ))}
      </ol>
    </div>
  );
}
