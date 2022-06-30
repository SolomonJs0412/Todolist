import React, {FC, useState, ChangeEvent} from 'react';
import './App.css';
import TodoTask from './components/TodoTask';
import {ITask} from './interfaces';



const App: FC = () => {

  
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todo, setTodo] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task"){
      setTask(event.target.value);
    }
    else{
      setDeadline(Number(event.target.value));
    }
    
  };

  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline}
    setTodo([...todo, newTask]);
    setTask("");
    setDeadline(0);
    //test
    // console.log(todo);
  }
  const completeTask = (taskNameToDelete: string): void => {
    setTodo(todo.filter((task) => {
      return task.taskName != taskNameToDelete
    }))
  }
  return (
    <div className="App">
      <div className = "header">
        <div className = "inputContainer">
          <input type="text" placeholder="Task..." value={task} name="task"  onChange={handleChange}/>
          <input type="number" placeholder="Deadline(days)..." value={deadline} name="deadline" onChange={handleChange}/>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className = "todoList">
        {todo.map((task: ITask, key: number) => {
          return < TodoTask  key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
}

export default App;
 