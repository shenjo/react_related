const {createStore, combineReducers} = require('redux');

const state = () => ({
    todos: [{
        text: 'eat food',
        completed: true
    }, {
        text: 'exercise',
        completed: false
    }],
    visibilityFilter: 'SHOW_COMPLETED'
});

// 1. 更改state里 visibilityFilter 数据的方法
function visibilityFilter(state = 'SHOW_ALL', action) {
    if (action.type === 'SET_VISIBILITY_FILTER') {
        return action.filter;
    }
    return state;
}

//2. 更改state里 todos 数据的方法
function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([{text: action.text, completed: false}]);
        case 'TOGGLE_TODO':
            return state.map((todo, index) => index === action.index ? {
                text: todo.text,
                completed: !todo.completed
            } : todo);
        default:
            return state;
    }
}

const store = createStore(state);

console.log(store.getState());

// 唯一改变state的方式是触发action{描述已发生事件的普通对象}

store.dispatch({
    type: 'ADD_TODO',
    index: 1
});

console.log(store.getState());

const r = createStore(combineReducers({visibilityFilter, todos}));
// 初始状态
console.log(r.getState());
// 修改todos
r.dispatch({type: 'ADD_TODO', text: 'hello'});
console.log(r.getState());
