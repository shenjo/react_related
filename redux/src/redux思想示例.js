//简单的state
const state = {
    todos: [{
        text: 'eat food',
        completed: true
    }, {
        text: 'exercise',
        completed: false
    }],
    visibilityFilter: 'SHOW_COMPLETED'
};


// action 示例

const add = {type: 'ADD_TODO', text: 'Go to swimming pool'};
const toggle_todo = {type: 'TOGGLE_TODO', index: 1};
const set_visibility = {type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL'};


// 根据action的描述，能很清楚的知道model应该发生什么样的变化，为了把action和state串起来，需要reducer函数

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

// reducer组合state和更改方法
function todoApp(state = {}, action) {
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    }
}

// 测试
// 添加一个todo
console.log(todoApp(state, add));
//toggle第一个todo
console.log(todoApp(state, toggle_todo));
// 更改visibility的值
console.log(todoApp(state, set_visibility));


