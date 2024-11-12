import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';

import { AxiosInstance } from '@/api/AxiosInstance';
import { ReportType } from '@/types/report';

const useFetchReport = (reportId: string, billingPeriod: string) => {
  const [report, setReport] = useState<ReportType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | AxiosError | null>(null);

  useEffect(() => {
    if (reportId && billingPeriod) {
      AxiosInstance.get(`/reports/${reportId}-${billingPeriod}`)
        .then((response) => {
          setReport(response.data);
          setLoading(false);
        })
        .catch((error: Error | AxiosError) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [reportId, billingPeriod]);

  return { report, loading, error };
};

export default useFetchReport;
