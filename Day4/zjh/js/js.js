function changeDom(list,change,changeValue) {
    if (change && change===true ) {
        var node = document.getElementById('task')
        if (node.value.trim()) {
            list.push({name:node.value,check:false})
            node.value = ''
        }
        else{
            alert('请输入有效值');
            return;
        }
    }
    else if(change===false){
        list.splice(changeValue,1)
    }
    checkedNumSum(list)
    var todolist = document.getElementById('todolist')
    todolist.innerHTML = ''
    for (let i = 0; i < list.length; i++) {
        todolist.appendChild(creatDom(list[i].name,i,list[i].check))
    }
}
function checkedNumSum(list) {
    let num = 0
    list.map(item =>{
        if (item.check) {
            num++
        }
    })
    var listLength =  document.getElementById('listLength')
    listLength.innerHTML = ''+num+'已完成 / '+list.length+'总数'
}
function creatDom(value,i,check) {
    var div = document.createElement('div')
    var div1 = document.createElement('div')
    var input = document.createElement('input')
    var txt=document.createTextNode(value); //创建文本节点
    var div2 = document.createElement('div')
    var txt2=document.createTextNode('删除'); //创建文本节点
    div1.classList.add('conent')
    if (check) {
        div.classList.add('checked')
    }
    div.classList.add('list')    
    input.setAttribute('type','checkbox')
    input.setAttribute('name','todo')
    input.setAttribute('value',i)
    input.checked=check
    div2.classList.add('delete')
    div2.appendChild(txt2)
    div.appendChild(div1)
    div.appendChild(div2)
    div1.appendChild(input)
    div1.appendChild(txt)
    input.addEventListener('click',function(e){
        if(e.target.checked){
            this.parentElement.parentElement.classList.add('checked')
        }
        else{
            this.parentElement.parentElement.classList.remove('checked')
        }
        todoList[i].check = e.target.checked
        checkedNumSum(todoList)
    })
    div2.addEventListener('click',function(e){
        checkedNumSum(todoList)
        changeDom(todoList,false,this.previousSibling.childNodes[0].value)
    })
    return div;
}

function domInsert() {
    changeDom(todoList,true)
}

let todoList = [{name:'吃饭',check:false},{name:'睡觉',check:false},{name:'打豆豆',check:false}]
window.onload = function () {
    changeDom(todoList)
}