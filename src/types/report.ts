export type ReportType = {
  id: number;
  columns: string[];
  data: string[][];
};

export type ReportList = {
  content: ReportListItem[];
  sort: ReportListSorting;
  totalElements: number;
  last: boolean;
  totalPages: number;
  first: boolean;
  numberOfElements: number;
  size: number;
  number: number;
};

export type ReportListItem = {
  id: number;
  name: string;
  description: string;
  modifiedDate: string;
};

export type ReportListSorting = {
  direction: string;
  property: string;
  ignoreCase: boolean;
  nullHandling: string;
  ascending: boolean;
};
