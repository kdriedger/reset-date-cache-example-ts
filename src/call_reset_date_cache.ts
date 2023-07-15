import { reset } from 'reset-date-cache';

export const testDate = () => {
  const d = new Date('10/20/2015 8:50:00 AM UTC');
  const orig = d.toString();

  process.env.TZ = 'US/Hawaii';
  reset();

  const d2 = new Date('10/20/2015 8:50:00 AM UTC');

  delete process.env.TZ;

  reset();

  const d3 = new Date('10/20/2015 8:50:00 AM UTC');

  reset();

  return { d2, d3, orig };
};
