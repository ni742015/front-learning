function changeDom(list,change,changeValue) {
    if (change && change===true ) {
        var node = document.getElementById('task')
        if (node.value.trim()) {
            list.push(node.value)
            node.value = ''
        }   
        else{
            alert('请输入有效值');
            return;
        }
    }
    else if(change===false){
        let i = list.indexOf(changeValue);
        list.splice(i,1)
    }
    checkedNumSum(list)
    var todolist = document.getElementById('todolist')
    todolist.innerHTML = ''
    for (let i = 0; i < list.length; i++) {
        todolist.appendChild(creatDom(list[i],i))
    }
}
function checkedNumSum(list,num) {
    if (!num) {
         num = 0
    }
    var listLength =  document.getElementById('listLength')
    listLength.innerHTML = ''+checkedNum+'已完成 / '+list.length+'总数'
}
function creatDom(value,i) {
    var div = document.createElement('div')
    div.classList.add('list')
    var div1 = document.createElement('div')
    div1.classList.add('conent')
    var input = document.createElement('input')
    input.setAttribute('type','checkbox')
    input.setAttribute('name','todo')
    input.setAttribute('value',i)
    var txt=document.createTextNode(value); //创建文本节点
    var div2 = document.createElement('div')
    var txt2=document.createTextNode('删除'); //创建文本节点
    div2.classList.add('delete')
    div2.appendChild(txt2)
    div.appendChild(div1)
    div.appendChild(div2)
    div1.appendChild(input)
    div1.appendChild(txt)
    input.addEventListener('click',function(e){
        if(e.target.checked){
            checkedNum++
            this.parentElement.parentElement.classList.add('checked')
        }
        else{
            checkedNum--
            this.parentElement.parentElement.classList.remove('checked')
        }
        checkedNumSum(todoList,checkedNum)
    })
    div2.addEventListener('click',function(e){
        let change = e.srcElement.parentElement.children[0].innerText
        changeDom(todoList,false,change)
    })
    return div;
}

function domInsert() {
    changeDom(todoList,true)
}

let todoList = ['吃饭','睡觉','打豆豆']
let checkedNum = 0
window.onload = function () {
    changeDom(todoList)
}