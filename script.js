let tasks = []
let newtask = document.querySelector('#newTask').addEventListener('click' , (e) => {
    e.preventDefault();
    addTask()
})
const addTask = () =>{
    const taskInput = document.querySelector('@taskInput')
    const textInput = taskInput.value.trim()
    if (text){
        tasks.push({text:text , completed:false });
    }
    console.log(tasks);
}