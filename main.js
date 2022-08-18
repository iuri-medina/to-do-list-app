const date = new Date;
const today = date.toDateString();
splitedToday = today.split(" ");
let dayString = splitedToday[0];
const dayNumber = splitedToday[2];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

if(dayString === 'Sun') {
    dayString = days[0];
}
else if(dayString === 'Mon') {
    dayString = days[1];
}
else if(dayString === 'Tue') {
    dayString = days[2];
}
else if(dayString === 'Wed') {
    dayString = days[3];
}
else if(dayString === 'Thu') {
    dayString = days[4];
}
else if(dayString === 'Fri') {
    dayString = days[5];
}
else {
    dayString = days[6];
}

const dateTitle = document.querySelector('.date');
if (dayNumber === '1') {
    dateTitle.innerHTML = `${dayString}, ${dayNumber}st`;
}
else if(dayNumber === '2' || dayNumber === '3') {
    dateTitle.innerHTML = `${dayString}, ${dayNumber}nd`;
} else {
    dateTitle.innerHTML = `${dayString}, ${dayNumber}th`;
}



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
        input.value = "";

        let remove = document.createElement('button');
        remove.classList.add('del-btn')
        remove.onclick = () => {
            setTimeout(() => {list.removeChild(task)}, 150);
        };
        task.appendChild(remove);
    }
});