'use client';

import { useState } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import ReportList from '@/components/ReportList';
import CalendarUI from '@/components/CalendarUI';
import { normalizeDate } from '@/utils/helpers';

export default function Home() {
  const [billingPeriod, setBillingPeriod] = useState<string>(normalizeDate(new Date()));

  const handleDateChange = (newDate: Date | null) => {
    setBillingPeriod(newDate ? normalizeDate(newDate) : normalizeDate(new Date()));
  };

  return (
    <PrimeReactProvider>
      <div className="card flex justify-content-center mt-6">
        <CalendarUI onDateChange={handleDateChange} />
      </div>
      <div className="card flex justify-content-center mt-6">
        <ReportList billingPeriod={billingPeriod} />
      </div>
    </PrimeReactProvider>
  );
}
