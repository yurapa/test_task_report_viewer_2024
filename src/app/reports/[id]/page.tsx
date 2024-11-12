'use client';

import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import ReportView from '@/components/ReportView';
import { normalizeDate } from '@/utils/helpers';

export default function Report() {
  const params = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const billingPeriod = searchParams.get('billingPeriod');

  return (
    <>
      <div className="card flex justify-content-center mt-6">
        <ReportView reportId={params.id} billingPeriod={billingPeriod ? billingPeriod : normalizeDate(new Date())} />
      </div>
      <div className="card flex justify-content-center mt-6">
        <Link href={'/'} className={'p-button font-bold'}>
          Home page
        </Link>
      </div>
    </>
  );
}
