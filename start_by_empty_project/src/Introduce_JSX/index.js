import React from 'react';
import ReactDom from 'react-dom';


function formatName(user) {
    return user.firstName + '' + user.lastName;
}

const user = {
    firstName: 'Joey',
    lastName: 'Shen'
};

const element = (
    <h1>
        hello,{formatName(user)}
    </h1>
);


ReactDom.render(element, document.getElementById('root'));


