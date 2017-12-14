import {createStore, combineReducers} from 'redux';
import {todoReducer} from "./reducers/todo-reducer";

const reducers = combineReducers({
    todoReducer
});

const store = createStore(
    reducers,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export { store as appState };
export type RootState = {}