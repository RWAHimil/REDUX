import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware
} from "redux";
import { thunk } from "redux-thunk";
import { reducer } from "./Reducer";
import { CounterReducer } from "./Counter Reducer";

const rootReducers = combineReducers({
  reducer: reducer,
  CouterReducer: CounterReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
