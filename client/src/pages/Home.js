import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

function Home(){
    const [listOfTasks, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/Task").then((res) => {
      setListOfPosts(res.data); 
    }); 
  }, []);

    return (
        <div> {
        listOfTasks.map((value, key) => {
        return <div className="task"> 
          <div className='title'> {value.task} </div> 
          <div className='body'> {value.id} </div> 
          <div className='body'> {value.createdAt} </div> 
        </div>
    })
  }
        </div>

    )
}

export default Home