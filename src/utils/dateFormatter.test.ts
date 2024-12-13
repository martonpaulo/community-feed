import { formatDate, timeAgo, getISODate } from './dateFormatter';

describe('dateFormatter', () => {
  describe('formatDate', () => {
    it('should format date correctly', () => {
      const date = new Date('2023-01-01T12:34:56Z');
      const formattedDate = formatDate(date);
      const expectedDate = date.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
      expect(formattedDate).toBe(`Published on ${expectedDate}`);
    });

    it('should format date with different time zones', () => {
      const date = new Date('2023-01-01T12:34:56+05:00');
      const formattedDate = formatDate(date);
      const expectedDate = date.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
      expect(formattedDate).toBe(`Published on ${expectedDate}`);
    });
  });

  describe('timeAgo', () => {
    it('should return "just now" for current time', () => {
      const now = new Date();
      const result = timeAgo(now);
      expect(result).toBe('just now');
    });

    it('should return correct time ago for past dates', () => {
      const now = new Date();
      const oneMinuteAgo = new Date(now.getTime() - 60 * 1000);
      const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
      const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

      expect(timeAgo(oneMinuteAgo)).toBe('1 minute ago');
      expect(timeAgo(oneHourAgo)).toBe('1 hour ago');
      expect(timeAgo(oneDayAgo)).toBe('1 day ago');
    });

    it('should return correct time ago for multiple units', () => {
      const now = new Date();
      const twoYearsAgo = new Date(now.getTime() - 2 * 31536000 * 1000);
      const threeMonthsAgo = new Date(now.getTime() - 3 * 2592000 * 1000);
      const fourWeeksAgo = new Date(now.getTime() - 4 * 604800 * 1000);

      expect(timeAgo(twoYearsAgo)).toBe('2 years ago');
      expect(timeAgo(threeMonthsAgo)).toBe('3 months ago');
      expect(timeAgo(fourWeeksAgo)).toBe('4 weeks ago');
    });
  });

  describe('getISODate', () => {
    it('should return ISO string of the date', () => {
      const date = new Date('2023-01-01T12:34:56Z');
      const isoDate = getISODate(date);
      expect(isoDate).toBe(date.toISOString());
    });

    it('should return ISO string for different dates', () => {
      const date = new Date('2022-12-31T23:59:59Z');
      const isoDate = getISODate(date);
      expect(isoDate).toBe(date.toISOString());
    });
  });
});
