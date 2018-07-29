let tasks = document.forms.tasks;
let taskFull = document.getElementsByClassName('task');
let newTask = document.forms.newTask;
let text = document.getElementById('inpText');
let adD = document.getElementById('adD');

tasks.onclick = function() {
    if (taskFull.length > 1) {
        for (let i = 0; i < taskFull.length; i++) {
            if (taskFull[i].children[0].checked) {
                tasks.removeChild(taskFull[i]);
            }
        }
    } else {
        alert('Останній елемент видалити неможливо');
    }
}

adD.onclick = function() {
    let createTaskFull = document.createElement('div');
    createTaskFull.setAttribute('class', 'task');

    let newInput = document.createElement('input');
    newInput.setAttribute("type", "checkbox");
    newInput.setAttribute("name", "task");
    newInput.checked = false;

    let newP = document.createElement('p');
    newP.setAttribute("class", "taskP");

    let newInpText = document.createTextNode(text.value);

    newP.appendChild(newInpText);
    createTaskFull.appendChild(newInput);
    createTaskFull.appendChild(newP);
    tasks.appendChild(createTaskFull);
}