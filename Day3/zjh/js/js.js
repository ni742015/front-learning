function changeDom(list,change,changeValue) {
    if (change && change===true ) {
        var node = document.getElementById('task')        
        list.push(changeValue)
        node.innerHTML = ''
    }
    else if(change && change===false){
        let i = list.indexOf(changeValue);
        list.splice(i,1)
    }
    var todolist = document.getElementById('todolist')
    for (let i = 0; i < list.length; i++) {
        todolist.appendChild(creatDom(list[i]))
    }
}

function creatDom(value) {
    var div = document.createElement('div')
    div.classList.add('list')
    var div1 = document.createElement('div')
    div1.classList.add('conent')
    var input = document.createElement('input:checke')
    input.setAttribute('type','check')
    input.setAttribute('name','todo')
    var txt=document.createTextNode(value); //创建文本节点
    var div2 = document.createElement('div')
    var txt2=document.createTextNode('删除'); //创建文本节点
    div2.classList.add('delete')
    div2.appendChild(txt2)
    div.appendChild(div1)
    div.appendChild(div2)
    div1.appendChild(input)
    div1.appendChild(txt)
    return div;
}

function domInsert(value) {
    changeDom(todoList,true)
}

function domDelete() {
    changeDom(todoList,false)
}
let todoList = ['吃饭','睡觉','打豆豆']

window.onload = function () {
    changeDom(todoList)
}