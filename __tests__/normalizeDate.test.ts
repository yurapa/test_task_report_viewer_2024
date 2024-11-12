import { normalizeDate } from '@/utils/helpers';

test('normalizes a Date object to the expected format', () => {
  const date = new Date('2024-06-01T00:00:00+03:00');
  expect(normalizeDate(date)).toBe('202406');
});

test('normalizes another Date object to the expected format', () => {
  const date = new Date('2023-12-25T00:00:00+03:00');
  expect(normalizeDate(date)).toBe('202312');
});
