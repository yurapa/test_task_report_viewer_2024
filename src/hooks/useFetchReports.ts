import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';

import { AxiosInstance } from '@/api/AxiosInstance';
import { ReportListDefault } from '@/utils/helpers';
import { ReportList } from '@/types/report';

const useFetchReports = () => {
  const [reports, setReports] = useState<ReportList>(ReportListDefault);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | AxiosError | null>(null);

  useEffect(() => {
    AxiosInstance.get('/reports')
      .then((response) => {
        setReports(response.data);
        setLoading(false);
      })
      .catch((error: Error | AxiosError) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { reports, loading, error };
};

export default useFetchReports;
