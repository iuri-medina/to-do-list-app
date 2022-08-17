const input = document.querySelector('#toDoInput');
const addButton = document.querySelector('.add-task');
const list = document.querySelector('#task-list');


addButton.addEventListener("click", () => {
    if(input.value === "" || input.value === " ") {
        alert("Digite algo para adicionar a tarefa.");
    }
    else {
        let task = document.createElement('li');
        task.innerHTML = input.value;
        list.appendChild(task);

        let remove = document.createElement('button');
        remove.classList.add('del-btn')
        remove.onclick = () => {
            list.removeChild(task);
            list.removeChild(remove);
        };
        task.appendChild(remove);
    }
});


