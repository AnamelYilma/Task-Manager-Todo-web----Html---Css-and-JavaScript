let tasks = [];
const taskInput = document.querySelector('#taskInput')
let newTask = document.querySelector('#newTask')
let tasklist = document.querySelector('#task-list')

//add on Array when they find value from input 
const addTask = (e) => { 
    e.preventDefault()
    const text = taskInput.value.trim()
    if (text != ''){
    tasks.push({
        text:text,
        completed:false,
        id: Date.now()
        
    }) 
    Display()
    updateProg()
}
    taskInput.value= '';

}
//event btn and enter 
newTask.addEventListener('click', addTask)
taskInput.addEventListener('keypress' ,(e) =>{
    if (e.key == 'Enter'){
        addTask(e)
    }
}
)
//Display creating html code when task add on array 
let Display = () =>{
    
    tasklist.innerHTML ='';
    tasks.forEach((task,index) => {
        let crtli = document.createElement('li')
        crtli.innerHTML = `
                <div class="taskitem ${ task.completed ? 'completed' : ''}" >
                    <div class="tasks" >
                        <input type="checkbox" name="checkbox" id="checkboxid" class="checkbox" ${ task.completed ? 'checked' : '' } />
                        <p id="taskText">${ task.text}</p>
                    </div>
                    <div class="icons">
                        <img src="image/edit.png" alt="" onclick="edit(${index})" srcset="">
                        <img src="image/delete.png" alt="" onclick="delet(${index})" srcset="">
                    </div>
                </div>
        `
        let chkbx = crtli.querySelector('.checkbox')
        chkbx.addEventListener('change',() => {
            tasks[index].completed = !tasks[index].completed
            updateProg()  // Update progress bar
            Display()
        })
        tasklist.appendChild(crtli)

    })

}


let delet = (index) =>{
  tasks.splice(index,1)
  Display()
  updateProg()


}
let edit = (index) => {
    taskInput.value = tasks[index].text

    
    tasks.splice(index,1)
    Display()
    updateProg()

}
let updateProg = () => {
    let compTask = tasks.filter(task => task.completed).length
    let TotalTask = tasks.length
    let progressjs = TotalTask > 0 ? (compTask / TotalTask)*100 :0;

    let progressbar = document.querySelector('#progress')
    let numbers = document.querySelector('#numbers')
    progressbar.style.width = `${progressjs}%`;
    numbers.textContent = `${compTask} / ${TotalTask}`

}