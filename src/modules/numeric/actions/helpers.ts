import * as types from '../types';
import { getRandomNumber } from '../utils';

export function createItem(range: types.Range): types.Item {
  const num = getRandomNumber(range.start, range.end);
  return {
    number: num,
    duration: num < 1000 ? 7000 : 14000,
  };
}