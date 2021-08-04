import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

import { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:4000/task';

function App() {

  const [toDoList, setToDoList] = useState([]);


  useEffect(() => {
    const uploadData = async () => {
      try {
        const result = await axios.get(url);
        setToDoList(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    uploadData();
  }, [])

  const toggleHandler = async (id) => {
    const idx = toDoList.findIndex(elem => elem.id === id);
    
    if (idx !== -1) {
      const { data } = await axios.put(`${url}/${idx}`, {
        ...toDoList[idx],
        complete: !toDoList[idx].complete
      });
      setToDoList([
        ...toDoList.slice(0, idx),
        data,
        ...toDoList.slice(idx + 1)
      ]);
    }
  }

  const deleteHandler = async (id) => {
    const idx = toDoList.findIndex(elem => elem.id === id);

    if (toDoList) {
      try {
        await axios.delete(`${url}/${id}`);
        setToDoList([
          ...toDoList.slice(0, idx),
          ...toDoList.slice(idx + 1)
        ]);
      } catch (err) {
        console.error(err);
        return err;
      }
    }
  }
  
  const addTask = async (userInput) => {
    const plus = {
      task:userInput,
      complete:false
    }
    const res = await axios.post(url,plus).catch(err => err)

    if(res?.data){
      setToDoList([
        ...toDoList,
        plus
      ])
    }
  }

  return (
    <div className="App">
      <Header></Header>
      <ToDoList toDoList={toDoList} toggleHandler={toggleHandler} deleteHandler={deleteHandler} />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
