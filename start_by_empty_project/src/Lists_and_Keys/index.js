import React from 'react';
import ReactDom from 'react-dom';


const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number => <li>{number}</li>);

ReactDom.render(<ul>{listItems}</ul>, document.getElementById('listExample'));


function NumberList(props) {
    const numbers = props.numbers;
    const itemList = numbers.map(number => <li>{number}</li>);
    return (
        <ul>{itemList}</ul>
    )
}

ReactDom.render(
    <NumberList numbers={numbers}/>, document.getElementById('numberList')
);
