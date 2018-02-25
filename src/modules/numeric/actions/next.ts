import { getState } from '../state';
import * as types from '../types';
import { createItem } from './helpers';

export const NEXT = 'numeric next';

export interface Next {
  type: typeof NEXT;
  index: number;
  push: types.Item | null;
}
export function next(): Next {
  const state = getState();
  const indexNext = state.index + 1;

  return {
    type: NEXT,
    index: indexNext,
    push: indexNext >= state.list.length ? createItem(state.range) : null,
  };
}