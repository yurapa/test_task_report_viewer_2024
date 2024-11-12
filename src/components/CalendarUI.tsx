'use client';

import { FC, useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { FloatLabel } from 'primereact/floatlabel';
import { Nullable } from 'primereact/ts-helpers';

type DatePickerProps = {
  onDateChange?: (dates: Date | null) => void;
};

const CalendarUI: FC<DatePickerProps> = ({ onDateChange }) => {
  const [dates, setDates] = useState<Nullable<Date | null>>(null);

  return (
    <FloatLabel>
      <Calendar
        inputId="billing_period"
        value={dates}
        onChange={(e) => {
          setDates(e.value);
          if (onDateChange) {
            onDateChange(e.value as Date);
          }
        }}
        view="month"
        dateFormat="mm/yy"
        showIcon
        selectionMode="single"
      />
      <label htmlFor="billing_period">Select the billing period</label>
    </FloatLabel>
  );
};

export default CalendarUI;
