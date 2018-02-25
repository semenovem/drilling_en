import { combineReducers } from 'redux';

import * as numeric from '../modules/numeric/reducers';

export interface State {
  numeric: numeric.State;
}

export const initState: State = {
  numeric: numeric.initState,
};

export const reducers = combineReducers<State>({
  numeric: numeric.reducers,
});
