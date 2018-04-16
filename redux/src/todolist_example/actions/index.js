let todoId = 0;
export const addTodo = text => ({
    text,
    id: todoId++,
    type: 'ADD_TODO'
});

export const toggleTodo = todoId => ({
    id: todoId,
    type: 'TOGGLE_TODO'
});

export const setVisibilityFilter = filter => ({
    type:'SET_VISIBILITY_FILTER',
    filter
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};