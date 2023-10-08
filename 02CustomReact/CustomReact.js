function customRender(element,container){
    /*
    const domElement=document.createElement(element.type)
    domElement.innerHTML=element.children
    domElement.setAttribute('href',element.props.href)
    domElement.setAttribute('target',element.props.target)

    container.appendChild(domElement)
    */
    const domElement=document.createElement(element.type)
    domElement.innerHTML=element.children
    for (const key in element.props) {
        domElement.setAttribute(key,element.props[key])
    }
    container.appendChild(domElement)
}

const reactElement={
    type: 'a',
    props:{
        href:'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer=document.getElementById('root')

customRender(reactElement,mainContainer)