import React from 'react';

const ToDo = ({ todo, toggleHandler, deleteHandler }) => {
    const handleClick = (e) => {
        e.preventDefault();
        toggleHandler(todo.id);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        deleteHandler(todo.id);
    }

    return (
        <div>
            <div    
                className={todo.complete ? "clear" : "n_clear"}
                onClick={handleClick}>
                {todo.task}
            </div>
            <button onClick={handleDelete}>delete</button>
        </div>

    )
}

export default ToDo;