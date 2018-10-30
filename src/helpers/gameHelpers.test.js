import { size, getInitialWall } from './gameHelpers';

describe('getInitialWall()', () => {
  const initialWall = getInitialWall();
  it('should return two dimensional array', () => {
    expect(initialWall).toBeInstanceOf(Array);
    initialWall.forEach(line => {
      expect(line).toBeInstanceOf(Array);
    });
  });
  it(`should return two dimensional array with ${size.y} lines`, () => {
    expect(initialWall).toHaveLength(size.y);
  });
  it(`each array line should have ${size.x} cells`, () => {
    initialWall.forEach(line => {
      expect(line).toHaveLength(size.x);
    });
  });
  it('should return empty wall, every cell should equal "false"', () => {
    initialWall.forEach(line => {
      line.forEach(cell => expect(cell).toBeFalsy());
    });
  });
});
