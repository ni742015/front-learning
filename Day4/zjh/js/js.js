let changeDom = (list,change,changeValue) => {
    if (change===1 ) {
        let node = document.getElementById('task')
        if (node.value.trim()) {
            list.push({name:node.value,check:false})
            node.value = ''
        }
        else{
            alert('请输入有效值');
            return;
        }
    }
    else if(change===2){
        list.splice(changeValue.value,1)
    }
    checkedNumSum(list)
    let todolist = document.getElementById('todolist')
    todolist.innerHTML = ''
    for (let i = 0; i < list.length; i++) {
        todolist.appendChild(creatDom(list[i].name,i,list[i].check))
    }
}

let checkedNumSum = (list) => {
    let num = 0
    list.map(item =>{
        if (item.check) {
            num++
        }
    })
    let listLength =  document.getElementById('listLength')
    listLength.innerHTML = ''+num+'已完成 / '+list.length+'总数'
}

const creatElement = (element) => { return document.createElement(element) }

let creatDom=(value,i,check) => {
    //元素创建
    let div = creatElement('div')
    let div1 = creatElement('div')
    let input = creatElement('input')
    let div2 = creatElement('div')
    let txt=document.createTextNode(value); //创建文本节点
    //样式添加
    div1.classList.add('conent')
    if (check) {
        div.classList.add('checked')
    }
    div.classList.add('list')
    //属性设置
    input.setAttribute('type','checkbox')
    input.setAttribute('name','todo')
    input.setAttribute('value',i)
    div2.classList.add('delete')
    div2.innerHTML='删除'        
    input.checked=check
    div.appendChild(div1)
    div.appendChild(div2)
    div1.appendChild(input)
    div1.appendChild(txt)
    //事件绑定
    input.addEventListener('click',function(e){
        if(e.target.checked) this.parentElement.parentElement.classList.add('checked')
        else{this.parentElement.parentElement.classList.remove('checked')}
        todoList[i].check = e.target.checked
        checkedNumSum(todoList)
    })
    div2.addEventListener('click',function(e){
        changeDom(todoList,2,this.previousSibling.childNodes[0])
    })
    return div;
}

let domInsert = () => {
    changeDom(todoList,1)
}

const todoList = [{name:'吃饭',check:false},{name:'睡觉',check:false},{name:'打豆豆',check:false}]
window.onload = function () {
    changeDom(todoList)
}