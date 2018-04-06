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

// 根据 json表示的dom结构产生真正的dom元素
const createRealDom = node => {
    if (typeof  node === 'string') {
        return document.createTextNode(node);
    }
    const $el = document.createElement(node.type);
    node.children.map(createRealDom).forEach($el.appendChild.bind($el));
    return $el;
};

// 根据当前dom真正的结构$parent，以及老/新 json表示的结构newNode/oldNode，更新真正的dom树($parent)
/**
 * 1.第一种情况，新加
 */
const updateElement = ($parent, newNode, oldNode, index = 0) => {
    if (!oldNode) {
        //如果没有老的结构，那么直接新加上去
        $parent.appendChild(createRealDom(newNode))
    } else if (!newNode) {
        //如果没有新的结构，那么表示要删除所有子元素
        $parent.removeChild($parent.childNodes[index]);
    } else if (isDiff(newNode, oldNode)) {
        $parent.replaceChild(createRealDom(newNode), $parent.childNodes[index]);
    } else if (newNode.type) {
        let maxChildren = Math.max(newNode.children.length, oldNode.children.length);
        let i = 0;
        while (i < maxChildren) {
            updateElement($parent.childNodes[index], newNode.children[i], oldNode.children[i], i);
            i++;
        }
    }
};

const isDiff = (node1, node2) => {
    return typeof node1 !== typeof node2 || typeof node1 === 'string' && node1 !== node2 || node1.type !== node2.type;
};


const rootElement = document.getElementById('root');
const changedNode = document.getElementById('change');

// rootElement.appendChild(createRealDom(list));


updateElement(rootElement,list)
changedNode.addEventListener('click', () => {
    updateElement(rootElement, anotherList, list);
})


