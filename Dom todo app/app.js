

//sary elements ko id sy get krlena hye

let todo_input = document.getElementById('todo_input');
let add_work_btn = document.getElementById('add_work_btn');
let Delete_task= document.getElementById('Delete_task');
let Task_history=document.getElementById('Task_history');

add_work_btn.addEventListener('click', function(){
    if(!todo_input.value) return alert('Enter Task First then Hit Button 😶');
//working history show krany ky liye aik li banani hye
    let Task_history_li = `<li ><span>${todo_input.value}</span>
    <button onclick="Edit(this)" class='btn'><i class="fa-solid fa-pen-to-square"></i></button>
    <button onclick="Delete(this)" class='btn'><i class="fa-regular fa-trash-can"></i></button>
    
    </li>`;
    Task_history.innerHTML += Task_history_li;

    todo_input.value = ''
});

//task history ki li ky btn ky functions.

function Delete(element){
console.log("Delete ==)> ", element.parentElement)
// console.log(element.parentElement.remove())
element.parentElement.remove()
};

function Edit(element){
// console.log("Edit ==)> ", element.previou)
let previousValue = element.previousElementSibling.innerText;
let UpdatedValue = prompt('Edit Value', previousValue);
element.previousElementSibling.innerText = UpdatedValue;
};