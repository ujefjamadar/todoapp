const taskInput=document.getElementById('task-input')
const timeInput=document.getElementById('time-input')
const addbutton=document.getElementById('add-button')
const taskList=document.getElementById('task-list')

addbutton.addEventListener('click',function()
{
    // retrive data from ip field
    const taskText=taskInput.value.trim();
    const taskTime=timeInput.value.trim();
    if (taskText!==""){
            // list  for new item
            const listitems=document.createElement('li')
            // for span
            const taskSpan=document.createElement('span')
            taskSpan.textContent = `${taskText} at ${taskTime}`;
            taskSpan.classList.add('task-text')

            // creating a delete button
            const deleteButton=document.createElement('button')
            deleteButton.textContent='Delete'

            deleteButton.classList.add('delete-button')
            listitems.appendChild(taskSpan)
            listitems.appendChild(deleteButton)

            // append the list item to the task
            taskList.appendChild(listitems)

            //clr the ip feild
            taskInput.value=''
            timeInput.value=''

    }
});

taskList.addEventListener('click',function(event){
     if(event.target.classList.contains('delete-button')){
        const listitems=event.target.parentNode;
        taskList.removeChild(listitems);
     }
     
});