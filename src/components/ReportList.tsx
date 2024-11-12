import { FC } from 'react';
import Link from 'next/link';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Skeleton } from 'primereact/skeleton';
import useFetchReports from '@/hooks/useFetchReports';
import { ReportListItem } from '@/types/report';

type ReportListProps = {
  billingPeriod?: string;
};

const ReportList: FC<ReportListProps> = ({ billingPeriod }) => {
  const { reports, loading, error } = useFetchReports();

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Report List</span>
    </div>
  );

  const footer = `In total there are ${reports.content ? reports.content.length : 0} reports.`;

  const actions = (rowData: ReportListItem) => {
    return (
      <Link href={`/reports/${rowData.id}?billingPeriod=${billingPeriod}`} className={'p-button font-bold'}>
        View
      </Link>
    );
  };

  if (loading) {
    const items: { id: number }[] = Array.from({ length: 5 }, (v, i) => ({ id: i }));

    return (
      <DataTable value={items} header={header} tableStyle={{ minWidth: '50rem' }}>
        <Column style={{ width: '10%' }} body={<Skeleton />} />
        <Column style={{ width: '30%' }} body={<Skeleton />} />
        <Column style={{ width: '30%' }} body={<Skeleton />} />
        <Column style={{ width: '30%' }} body={<Skeleton />} />
      </DataTable>
    );
  }

  if (error) {
    return <div>There was an error fetching the reports!</div>;
  }

  return (
    <DataTable
      value={reports.content}
      header={header}
      footer={footer}
      sortMode="multiple"
      removableSort
      paginator
      rows={reports.size}
      rowsPerPageOptions={[1, 10, 20, 50]}
      tableStyle={{ minWidth: '50rem' }}
    >
      <Column field="id" header="ID" style={{ width: '10%' }} />
      <Column field="name" header="Name" sortable style={{ width: '30%' }} />
      <Column field="description" header="Description" sortable style={{ width: '30%' }} />
      <Column field="action" header="Actions" body={actions} style={{ width: '30%' }} />
    </DataTable>
  );
};

export default ReportList;
