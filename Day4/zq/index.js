window.onload = () => {
    let button = document.getElementById('button'),
        input = document.getElementById('input'),
        ul = document.getElementById('ul'),
        todolist = [
            {
                todo: '任务一',
                done: true 
            },
            {
                todo: '任务二',
                done: false 
            },
            {  
                todo: '任务三',
                done: true 
            }
        ],
        todoCount = todolist.length,
        doneCount = todolist.filter(item => item.done === true ).length;

    // checkbox状态修改
    const changeCheckbox = e => {
        let liIndex = e.target.parentNode.dataset.index // li的data-index属性
        todolist[liIndex].done = e.target.checked
        e.target.checked ? doneCount++ : doneCount--
        renderList(todolist)
    }
    changeCheckbox2 = (index) => {
        let old = todolist[index].done
        todolist[index].done = !old
        !old ? doneCount++ : doneCount--
        renderList(todolist)
    }

    // 删除操作
    // const deleteTodoList = e => {
    //     let liIndex = e.target.parentNode.dataset.index // li的data-index属性
    //     if (todolist[liIndex]['done']) {
    //         doneCount--
    //     }
    //     todoCount--
    //     todolist.splice(liIndex, 1)
    //     renderList(todolist)
    // }
    deleteTodoList2 = (index) => {
        if (todolist[index]['done']) {
            doneCount--
        }
        todoCount--
        todolist.splice(index, 1)
        renderList(todolist)
    }

    // 渲染任务列表
    const renderList = (todolist) => {
        // ul.innerHTML = `<li class="list-item">${doneCount}已完成 / ${todoCount}总数</li>`;
        // if (todolist.length > 0) {
        //     todolist.forEach((item, index) => {
        //         let li = document.createElement('li'),
        //         checkbox = document.createElement('input'), 
        //         content = document.createElement('div'),
        //         del = document.createElement('div');
        //         if (item.done) {
        //             li.classList.add('list-item', 'done')
        //         } else {
        //             li.classList.add('list-item')
        //         }
        //         li.dataset.index = index
        //         checkbox.type = 'checkbox'
        //         checkbox.checked = item.done
        //         content.innerText = item.todo
        //         content.classList.add('todo-content')
        //         del.innerText = '删除'
        //         del.classList.add('delete')
        //         li.append(checkbox, content, del)
        //         ul.insertBefore(li, null)
        //         checkbox.onchange = changeCheckbox      // 修改选择框
        //         del.onclick = deleteTodoList      // 删除
        //     });

        // }

        let domstr =  `<li class="list-item">${doneCount}已完成 / ${todoCount}总数</li>`
        if (todolist.length > 0) {
            todolist.forEach((item, index) => {
                domstr += `<li class="list-item ${item.done ? "done": ""}">
                    <input type="checkbox" ${item.done ? "checked" : ""} onclick="changeCheckbox2(${index})">
                    <div class="todo-content">${item.todo}</div>
                    <div class="delete" onclick="deleteTodoList2(${index})">删除</div>
                    </li>`
            });
        }
        ul.innerHTML = domstr
    }

    renderList(todolist)

    

    // 创建todo List
    const createTodoList = () => {
        if (input.value.trim()) {
            var obj_list = {
                todo: input.value,       //用于存储用户输入的数据
                done: false     //初始化用户输入的数据属性，以便对用户待办事项进行分类
            }
            todolist.push(obj_list)
            todoCount++
            renderList(todolist)
            input.value = ''
        }
    }

    // 点击创建按钮
    button.onclick = () => {
        createTodoList()
    }

    // 监听enter
    input.onkeyup = (e) => {
        if(e.keyCode === 13){
            createTodoList();
        }
    }
}