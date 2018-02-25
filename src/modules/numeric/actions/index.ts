import { State } from '../reducers';
import { getState } from '../state';
import { CreateItem } from './createItem';
import { Next } from './next';

export * from './createItem';
export * from './next';
// ---
export const INIT = 'numeric init';
export const PREV = 'numeric prev';
export const IGNORE = 'numeric ign';

export type Actions = Init | CreateItem | Next | Prev;

interface Ignore {
  type: typeof IGNORE;
}

export interface Init {
  type: typeof INIT;
  state: State;
}
export function init(state: State): Init {
  return {
    type: INIT,
    state,
  };
}

export interface Prev {
  type: typeof PREV;
  index: number;
}
export function prev(): Prev | Ignore {
  const state = getState();

  if (state.index <= 0) {
    return {
      type: IGNORE,
    };
  }

  return {
    type: PREV,
    index: state.index - 1,
  };
}
