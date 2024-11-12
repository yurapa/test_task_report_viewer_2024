import type { ReportList, ReportType } from '@/types/report';

export function normalizeDate(date: Date): string {
  const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
  const year: number = date.getFullYear();

  return `${year}${month}`;
}

export function normalizeReportData(report: ReportType): Record<string, string>[] {
  if (!report) return [];

  return report.data.map((row) => {
    return report.columns.reduce(
      (acc, col, index) => {
        acc[col] = row[index];
        return acc;
      },
      {} as Record<string, string>,
    );
  });
}

export const ReportListDefault: ReportList = {
  content: [],
  totalElements: 0,
  last: false,
  totalPages: 0,
  size: 0,
  number: 0,
  first: false,
  numberOfElements: 0,
  sort: {
    direction: '',
    property: '',
    ignoreCase: false,
    nullHandling: '',
    ascending: false,
  },
};
