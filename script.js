let tasks = []
let newTask = document.querySelector('#newTask')
const taskInput = document.querySelector('#taskInput')
const addTask = () =>{
    const text = taskInput.value.trim()
    if (text){
        tasks.push({
            text:text ,
            completed:false 
        });
        UpdateStats()
        console.log('Task added. Total tasks:', tasks);
    }
    console.log(tasks);
    UpdateTaskList() 
   

}
newTask.addEventListener('click' ,(e)=>{
            addTask()
            taskInput.value = '';

        })
taskInput.addEventListener('keypress' ,(e)=>{
        if (e.key === 'Enter'){
            addTask()
            taskInput.value = '';

        }
    })
const toggleTaskComplete = (index) =>{
    tasks[index].completed = !tasks[index].completed
    UpdateTaskList()
    UpdateStats()

}
const deleteTask = (index) => {
    tasks.splice(index,1);
    UpdateTaskList()
    UpdateStats()
}
const editiTask = (index) =>{
    const taskInput = document.querySelector('#taskInput')
    taskInput.value = tasks[index].text

    tasks.splice(index,1);
    UpdateTaskList()
    UpdateStats()
}

const UpdateStats = () =>{

    const completeTasks = tasks.filter(task => task.completed).length
    const TotalTasks = tasks.length

    const progress = TotalTasks > 0 ? (completeTasks / TotalTasks)*100: 0 ;
    const progressBar = document.querySelector('#progress')
    const numbersDisplay = document.querySelector('#numbers')
    progressBar.style.width = `${progress}%`
    numbersDisplay.textContent = `${completeTasks} / ${TotalTasks}`
    console.log("Variable values:", { completeTasks, TotalTasks, progress })

}
const UpdateTaskList = () => {
    const tasklist = document.querySelector('#task-list')
    tasklist.textContent = '';
    tasks.forEach((task,index) => {
        const listitem = document.createElement('li')
        listitem.innerHTML = `
        <div class="taskltem ${task.completed ? 'completed' : '' }">
            <div class="task">
                <input type="checkbox" class="checkbox" ${ task.completed ? 'checked' : '' } />
                <p class="${task.completed ? 'completed' : ''}" >${task.text}</p>
            </div>
            <div class="icons">
                <img src="./image/edit.png" onclick ='editiTask(${index})' />
                <img src="./image/delete.png" onclick ='deleteTask(${index})'/>
            </div>
        </div> `;
        const checkbox = listitem.querySelector('.checkbox')
        checkbox.addEventListener(
            "change" , ()=> toggleTaskComplete(index) 
        )
        tasklist.append(listitem);
    })
}
newTask.addEventListener("click"  , e =>  {
    e.preventDefault();
    addTask()
})