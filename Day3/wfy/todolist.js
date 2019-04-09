//初始数据
let list = ['吃饭', '睡觉', '打豆豆'];
window.onload = function () {
    list.forEach(function (value) {
        addItemToList(value);
    });
    checkboxNum();  //更新checkbox数目
    document.getElementById('task').focus();  //初始聚焦到输入框
}

//鼠标触发
function f_Input_onclick() {
    addItemToList();
}

//回车触发
function f_Input_onkeydown(event) {
    event = event || window.event;  //浏览器兼容
    if (event.keyCode == 13) {  //enter键keyCode
        f_Input_onclick();
    }
}

// 添加list项
function addItemToList(value) {
    let node = document.getElementById('task');
    if (node.value.trim()) {
        creatItemDom(node.value);
        node.value = '';
    } else if (value) {
        creatItemDom(value);
    } else {
        alert('无效输入');
        return;
    }
    checkboxNum();
}

// 更新checkbox数目
function checkboxNum() {
    let checkedNum = 0;
    let todolist = document.getElementsByName("todo");
    for (let i = 0; i < todolist.length; i++) {
        if (todolist[i].checked) {
            checkedNum++;
        }
    }
    document.getElementById('listLength').innerHTML = '' + checkedNum + '已完成 / ' + todolist.length + '总数';
}

//添加todolist一项的dom结构
function creatItemDom(value) {
    let div = document.createElement('div')
    div.classList.add('list')
    let div1 = document.createElement('div')
    div1.classList.add('conent')
    let input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('name', 'todo')
    let txt = document.createTextNode(value);
    let div2 = document.createElement('div')
    let txt2 = document.createTextNode('删除');
    div2.classList.add('delete')
    div2.appendChild(txt2)
    div.appendChild(div1)
    div.appendChild(div2)
    div1.appendChild(input)
    div1.appendChild(txt)

    // checkbox打勾
    input.addEventListener('click', function (e) {
        if (e.target.checked) {
            this.parentElement.parentElement.classList.add('checked');
            checkboxNum();
        } else {
            this.parentElement.parentElement.classList.remove('checked');
            checkboxNum();
        }
    })

    // 删除todolist中的一项
    div2.addEventListener('click', function (event) {
        event = event || window.event;
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
        checkboxNum();
    })
    todolist.appendChild(div);
}