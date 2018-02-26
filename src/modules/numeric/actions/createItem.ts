import { getState } from '../state';
import * as types from '../types';
import { getRandomNumber } from '../utils';

export const CREATE_ITEM = 'numeric create item';

export interface CreateItem {
  type: typeof CREATE_ITEM;
  item: types.Item;
}

export function createItem(): CreateItem {
  return {
    type: CREATE_ITEM,
    item: _createItem(),
  };
}

function _createItem(): types.Item {
  const range = getState().range;
  const num = getRandomNumber(range.start, range.end);

  return {
    number: num,
    duration: num < 100 ? 5000 : 10000,
  };
}
