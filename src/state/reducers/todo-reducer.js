const initialState = {
    todos: []
};

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD': {
            return {...state, todos: [...state.todos, action.payload]}
        }
        case 'REMOVE': {
            return {...state, todos: [...state.todos.filter((it, index) => index !== action.payload)]}
        }
        default:
            return initialState;
    }
};

export {todoReducer};