import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ toDoList, toggleHandler, deleteHandler }) => {

    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo key={todo.id}  todo={todo}  toggleHandler={toggleHandler} deleteHandler={deleteHandler} />
                )
            })}
        </div>
    )
}


export default ToDoList;