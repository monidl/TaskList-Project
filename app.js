//remove elements
let lis = document.querySelectorAll("li");
lis.forEach(function(li) {
  li.remove();
});

//Event handler
const bodyNode = document.body;

bodyNode.addEventListener("click", handleEvent);

function handleEvent(e) {
    if (e.target.parentElement.classList.contains("delete-item")) {
    confirm("Are you sure you want to delete this task?")
       e.target.parentElement.parentElement.remove();
    }
}

//Query selector
const form = document.querySelector("form");
const taskInput = document.getElementById('task');
const list = document.querySelector('ul');

form.addEventListener('submit', runEvent);

function runEvent(e){
    newTask = document.createElement('li');
    newTask.setAttribute('class', 'collection-item');
    newTask.innerHTML = `${taskInput.value} 
    <a href="#" class="delete-item secondary-content">
    <i class="fa fa-times" />
    </a>`

    list.appendChild(newTask);
    e.preventDefault();
}


//Local Storage
addTask = document.querySelector('form');
inputTask = document.getElementById('task');

if (localStorage.taskList) {
    taskList = JSON.parse(localStorage.taskList);
  } else {
    taskList = [];
  }
  
  addTask.addEventListener("submit", function(e) {
    taskList.push(inputTask.value);
  
    localStorage.setItem("taskList", JSON.stringify(taskList));
  
    e.preventDefault();
  });
  
 //filter
 $("#txtSearch").on('keyup', function() {
    var search = $(this).val().toLowerCase();
   
    $(".collection-item").each(function() {
        if ($(this).html().toLowerCase().indexOf(search) != -1) {
            $(this).show();
        }
        else {
            $(this).hide();  
        }

    });
  });

