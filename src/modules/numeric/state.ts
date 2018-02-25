import { State } from './reducers';

let _getState: () => State;

export function getState(): State {
  return _getState();
}
export function setGetState(fn: () => State) {
  _getState = fn;
}
