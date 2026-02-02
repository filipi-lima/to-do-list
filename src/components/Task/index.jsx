import React from "react";
import "./style.css";
import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import propTypes from "prop-types";

function Task({ tasks, handleDeleteTask, tasksUpdate }) {
  return (
    <div className="tasks-container">
      {tasks.length > 0 && (
        tasks.map((task) => (
            <div key={task.id} className="task">
            <span className="task__icon">
                {(task.isCompleted && <FaCheck className="check__icon" />) || (
                <span>-</span>
                )}
            </span>
            <span
                className="title"
                onClick={() => {
                task.isCompleted = !task.isCompleted;
                tasksUpdate();
                }}
            >
                {task.title}
            </span>
            <FaTrash
                className="trash__icon"
                onClick={() => handleDeleteTask(task.id)}
            />
            </div>
        ))
      ) || (<span className="message">Nenhuma tarefa encontrada</span>)}
    </div>
  );
}

Task.propTypes = {
  tasks: propTypes.any,
}.isRequired;

export default Task;
