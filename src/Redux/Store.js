import { combineReducers, createStore } from "redux";
import { reducer } from "./Reducer";
import { CounterReducer } from "./Counter Reducer";

const rootReducers = combineReducers({
  reducer: reducer,
  CouterReducer: CounterReducer
});

export const store = createStore(rootReducers);
