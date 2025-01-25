import BigNumber from 'bignumber.js';

export function getBlurMiddleNum(start = 0, end = 0): number {
  if (start > end) [start, end] = [end, start];
  const middle = new BigNumber((start + end) / 2);
  const I = new Array(20).findIndex((_, index) => start < +middle.toFixed(index, 1) && +middle.toFixed(index, 1) < end);
  return I === -1 ? start : +middle.toFixed(I, 1);
}
