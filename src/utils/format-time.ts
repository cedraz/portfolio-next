import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

type Options = {
  startDate: Date;
  endDate?: Date;
};

export function useFormattedExperienceDates({ startDate, endDate }: Options) {
  const t = useTranslations('Journey');
  const now = new Date();

  return useMemo(() => {
    const formatMonthYear = (date: Date) => {
      const month = date.getMonth();
      const year = date.getFullYear();
      return `${t(`months.${month}`)} ${t('of')} ${year}`;
    };

    const start = formatMonthYear(startDate);
    const end = endDate ? formatMonthYear(endDate) : t('present');

    const effectiveEnd = endDate ?? now;

    const months =
      (effectiveEnd.getFullYear() - startDate.getFullYear()) * 12 +
      (effectiveEnd.getMonth() - startDate.getMonth()) +
      2;

    const duration =
      months < 12
        ? t('duration.months', { count: months })
        : t('duration.yearsAndMonths', {
            years: Math.floor(months / 12),
            months: months % 12,
          });

    return `${start} – ${end} · ${duration}`;
  }, [startDate, endDate, t]);
}
