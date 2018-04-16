import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({text, onClick, completed}) => (
    <li onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>{text}</li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    tetx: PropTypes.string.isRequired,
};

export default Todo;

