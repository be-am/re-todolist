import React, { useState } from 'react';

const ToDoForm = ({addTask}) => {
    const [userInput,setUserInput]=useState([]);
    
    const changeHandler = (e) =>{
        setUserInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }


    return (
        <form onSubmit={submitHandler}>
            <input value={userInput} type="text" onChange={changeHandler}></input>
        </form>
    )
}

export default ToDoForm;