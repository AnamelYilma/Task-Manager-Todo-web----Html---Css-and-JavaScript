let tasks = []
let newtask = document.querySelector('#newTask')
const addTask = () =>{
    const taskInput = document.querySelector('@taskInput')
    const textInput = taskInput.value.trim()
    if (text){
        tasks.push({text:text , completed:false});
    }
    console.log(tasks)
}
newtask.addEventListener('click' , e => {
    e.preventDefault();

})