import * as types from './types';
import * as actions from './actions';

export interface State {
  range: types.Range;

  /**
   * Указатель элемент Item в массиве list, который является текущим в данный момент
   */
  index: number;

  list: types.Item[];
}

export const initState: State = {
  range: {
    start: 1,
    end: 999,
  },
  index: 0,
  list: [
    {
      number: 34,
      duration: 10000,
    }
  ],
};

export const reducers = function reducer(state: State = initState, action: actions.Actions): State {
  switch (action.type) {
    case actions.INIT:
      return {
        ...state,
      };
    case actions.CREATE_ITEM:
      return {
        ...state,
      };

    case actions.NEXT:
      return {
        ...state,
        index: action.index,
        list: action.push ? [...state.list, action.push] : state.list,
      };

    case actions.PREV:
      return {
        ...state,
        index: action.index,
      };

    default: return state;
  }
};
