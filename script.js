const form = document.querySelector(".to-do-list"); // вся форма
const sortButton = document.querySelector('.sort-but'); // кнопка для сортировки
const newTodoButton = document.querySelector('#plus'); // "+" для вызова поля ввода
const newLi = document.querySelector('.new-li'); // поле ввода
const addToDoButton = document.querySelector('.add-but'); // для добавления нового пункта
const newDelBut = document.querySelector('.new-del-but'); // кнопка сокрытия поля ввода
const addedLi = document.querySelector('.added-li'); // элемент списка
const addedLiSpan = document.querySelector('.added-li span'); // содержание элемента списка
const delBut = document.querySelector('.del-but'); // кнопка удаления элемента списка
const toDoInput = document.querySelector('.todo-input'); //поле ввода
const doList = document.querySelector('.do'); //список дел
let toDos = []; //массив объектов

let toDo = { //нулевой пункт списка, не выводится
    index: 0,
    act: 'Сделать зарядку',
};

toDos.push(toDo);

newTodoButton.addEventListener('click', e =>{
    e.preventDefault(); // предотвращение перезагузки страницы
    newLi.style.display = 'flex';
});

newDelBut.addEventListener('click', e => {
    e.preventDefault(); // предотвращение перезагузки страницы
    newLi.style.display = 'none';
});

delBut.addEventListener('click', e => {
    e.preventDefault(); // предотвращение перезагузки страницы
    e.target.parentElement.parentElement.remove();
});

addToDoButton.addEventListener('click', e => {
    e.preventDefault(); // предотвращение перезагузки страницы
    if (toDoInput.value === '' || toDoInput.value === ' ') return ;
    let index = toDos.length; // индекс, идентификатор пункта дел
    let toDoItem = toDoInput.value; 
    listBuilding(index, toDoItem);
    addToArr(index, toDoItem);
    toDoInput.value = '';
});

const listBuilding = (key, item) => { //создание элемента списка
    let li = document.createElement('li');
    li.setAttribute("index", key); // присвоение идентификатора

    li.innerText = item; // содержимое пункта списка
    doList.appendChild(li);
};

const addToArr = (key, item) => {  // добавление объекта в массив 
    let index = key;
    let act = item;
    toDos.push({index, act});
    console.log(toDos);
}

sortButton.addEventListener('click', e => {
    e.preventDefault(); // предотвращение перезагузки страницы
    
});
