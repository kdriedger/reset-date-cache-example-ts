import { testDate } from '../call_reset_date_cache';

it('test date', () => {
  const { d2, d3, orig } = testDate();
  expect(d2.toString()).toBe('Mon Oct 19 2015 22:50:00 GMT-1000 (HST)');
  expect(d3.toString()).toBe(orig);
});