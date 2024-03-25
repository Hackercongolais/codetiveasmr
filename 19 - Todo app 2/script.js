const inputNew = document.querySelector('.input-new');
const buttonAdd = document.querySelector('.btn-add');


const tasksContainer = document.querySelector('.container-tasks');

let currentTask = null;

// ciecie przy pisaniu btn add

// 2 ciecie po innterHTML bo samolot

buttonAdd.addEventListener('click', () => {
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerHTML = `
        <div class="task-text">
            ${inputNew.value}
        </div>
        <button class="btn-delete">X</button>`

    tasksContainer.appendChild(newTask);

    inputNew.value = '';

    const btnDeletes = document.querySelectorAll('.btn-delete');

    btnDeletes.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            tasksContainer.removeChild(e.target.parentNode);
        })
    })
})
