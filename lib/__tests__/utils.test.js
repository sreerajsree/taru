import { getCurrentWidth, calculateNumItemsOnRow } from '../utils';

describe('getCurrentWidth', () => {
  test('returns xl', async () => {
    expect(getCurrentWidth(1300)).toEqual('xl');
  });
  test('returns lg', async () => {
    expect(getCurrentWidth(1100)).toEqual('lg');
  });
  test('returns md', async () => {
    expect(getCurrentWidth(800)).toEqual('md');
  });
  test('returns sm', async () => {
    expect(getCurrentWidth(100)).toEqual('sm');
  });
});

describe('calculateNumItemsOnRow', () => {
  test('returns 3 as size is xl', async () => {
    expect(calculateNumItemsOnRow(1300)).toEqual(3);
  });
  test('returns 3 as size is lg', async () => {
    expect(calculateNumItemsOnRow(1100)).toEqual(3);
  });
  test('returns 2 as size is md', async () => {
    expect(calculateNumItemsOnRow(800)).toEqual(2);
  });
  test('returns 1 as size is sm', async () => {
    expect(calculateNumItemsOnRow(100)).toEqual(1);
  });
});
