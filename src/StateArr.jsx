import React from "react";
import { useState } from "react";

const StateArr = () => {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);

  const addTask = () => {
    const randomTasks = [
      "Позвонить маме",
      "Прочитать книгу",
      "Записаться в зал",
      "Купить цветы",
      "Сделать уборку",
    ];
    const random = Math.floor(Math.random() * randomTasks.length);
    const newTask = randomTasks[random];
    setTasks((prevTask) => [...prevTask, newTask]);
	};
	
	const deleteTask = () => {
		setTasks((prevTask) =>prevTask.slice(0,-1))
	}

  return (
    <>
      <h3>Список задач</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button onClick={addTask}>Добавить задачу</button>
      <button onClick={deleteTask}>Удалить последнюю задачу</button>
    </>
  );
};

export default StateArr;
