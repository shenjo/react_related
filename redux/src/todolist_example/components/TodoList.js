import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, toggleTodo}) => (
    <ul>
        {
            todos.map((todo, index) => (
                <Todo onClick={() => toggleTodo(index)} {...todo} key={index}/>
            ))
        }
    </ul>
);

TodoList.propTypes = {
    toTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default TodoList;