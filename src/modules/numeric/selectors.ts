import { State } from './reducers';
import { Item } from './types';

export function getCurrectItem(state: State): Item {
  return state.list[state.index];
}