# Redux workflow

1 - Define your reducer

    const initialState = {
        todos: []
    };
    
    const todoReducer = (state, action) => {
        switch (action.type) {
            case 'ADD': {
                return {...state, todos: [...state.todos, action.payload]}
            }
            default: {
                return initialState;
            }
        }
    };
    
    export {todoReducer};
    
2 - Create your store

    import {createStore, combineReducers} from 'redux';
    import {todoReducer} from "./reducers/todo-reducer";
    
    const reducers = combineReducers({
        todoReducer
    });
    
    const store = createStore(reducers);
    
    export { store };
    
3 - Listen to your store

    store.subscribe