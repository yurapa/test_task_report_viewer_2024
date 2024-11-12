'use client';

import { FC } from 'react';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import { DataTable } from 'primereact/datatable';
import useFetchReport from '@/hooks/useFetchReport';
import { normalizeReportData } from '@/utils/helpers';

type ReportViewProps = {
  reportId: string;
  billingPeriod: string;
};

const ReportView: FC<ReportViewProps> = ({ reportId, billingPeriod }) => {
  const { report, loading, error } = useFetchReport(reportId as string, billingPeriod as string);

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Report ID: {reportId}</span>
    </div>
  );

  const footer = `In total there are ${report?.data ? report?.data.length : 0} lines.`;

  if (loading) {
    const items: { id: number }[] = Array.from({ length: 5 }, (v, i) => ({ id: i }));

    return (
      <DataTable value={items} header={header} tableStyle={{ minWidth: '50rem' }}>
        <Column body={<Skeleton />} style={{ width: '25%' }} />
        <Column body={<Skeleton />} style={{ width: '25%' }} />
        <Column body={<Skeleton />} style={{ width: '25%' }} />
        <Column body={<Skeleton />} style={{ width: '25%' }} />
      </DataTable>
    );
  }

  if (error || !report) {
    return <div>There was an error fetching the report!</div>;
  }

  const preparedData = normalizeReportData(report);

  return (
    <DataTable
      value={preparedData}
      paginator
      rows={10}
      rowsPerPageOptions={[10, 25, 50, 100, 300]}
      header={header}
      footer={footer}
      sortMode="multiple"
      removableSort
      showGridlines
      tableStyle={{ minWidth: '50rem' }}
    >
      {report?.columns.map((col) => <Column key={col} field={col} header={col} sortable />)}
    </DataTable>
  );
};

export default ReportView;
