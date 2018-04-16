import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'


const AddTodo = ({dispatch}) => {
    let input;

    const addTodoClick = (e) => {
        e.preventDefault();
        if (input.value.trim()) {
            dispatch(addTodo(input.value));
            input.value = '';
        }
    };

    return (
        <div>
            <input type="text" ref={node => input = node}/>
            <button onClick={addTodoClick}>Add</button>
        </div>
    )
};

export default connect()(AddTodo);

