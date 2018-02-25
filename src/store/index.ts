import { createStore } from 'redux';
import * as root from '../reducers';

import { setGetState as numericSetGetState } from '../modules/numeric/state';

const tt: string = '__REDUX_DEVTOOLS_EXTENSION__';

const store = createStore<root.State>(
  root.reducers,
  root.initState,
  window[tt] && window[tt](),
);

numericSetGetState(function() {
  return store.getState().numeric;
});

export default store;