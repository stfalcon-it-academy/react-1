import { addLeadingZero } from './stringHelpers';

describe('`addLeadingZero`', () => {
  it('returns "00" when received no chars', () => {
    expect(addLeadingZero()).toBe('00');
  });
  it('returns adds leading zero when received one char', () => {
    expect(addLeadingZero(1)).toBe('01');
  });
  it('returns input without changes when received more than one char', () => {
    expect(addLeadingZero(12)).toBe('12');
  });
});
