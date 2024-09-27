// 牛客-JS能力测评
var vnode = {
    tag: 'ul',
    props: {
        class: 'list'
    },
    text: '',
    children: [
        {
            tag: "li",
            props: {
                class: "item"
            },
            text: '',
            children: [
                {
                    tag: undefined,
                    props: {},
                    text: '牛客网',
                    children: []
                }
            ]
        },
        {
            tag: "li",
            props: {},
            text: '',
            children: [
                {
                    tag: undefined,
                    props: {},
                    text: 'nowcoder',
                    children: []
                }
            ]
        }
    ]
}
const _createElm = vnode => {
    let { tag, props, text, children } = vnode
    // 补全代码
    if (typeof tag == "string") {
        let dom = document.createElement(tag)
        dom.innerText = text
        for (key in props) {
            dom.setAttribute(key, props[key])
        }
        // forEach不会遍历空数组！
        children.forEach(item => {
            // 开始递归
            let childrenDom = _createElm(item)
            dom.append(childrenDom)
        });
        return dom
    } else {
        return document.createTextNode(text)
    }
}
_createElm(vnode)