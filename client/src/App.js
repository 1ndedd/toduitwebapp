import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';


function App() {
  const [listOfTasks, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/Task").then((res) => {
      setListOfPosts(res.data); 
    }); 
  }, []);

  return (
    <div className="App"> {
      listOfTasks.map((value, key) => {
        return <div className="task"> 
          <div className='title'> {value.task} </div> 
          <div className='body'> {value.id} </div> 
          <div className='body'> {value.createdAt} </div> 
        </div>
    })
  }
  </div>);
}

export default App;
