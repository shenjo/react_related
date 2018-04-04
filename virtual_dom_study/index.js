/** @jsx toDom */


function toDom(type, props, ...children) {
    return {type, props, children}
}

const list = (
    <ul>
        <li>first</li>
        <li>second</li>
    </ul>
);

const anotherList = (
    <ul>
        <li>first modified text</li>
        <li>second</li>
    </ul>
);


const createRealDom = node => {
    if (typeof  node === 'string') {
        return document.createTextNode(node);
    }
    const $el = document.createElement(node.type);
    node.children.map(createRealDom).forEach($el.appendChild.bind($el));
    return $el;
};




const rootElement = document.getElementById('root');

rootElement.appendChild(createRealDom(list));
