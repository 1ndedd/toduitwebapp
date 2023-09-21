import logo from './logo.svg';
import './App.css';
import  {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home.js"
import CreateTask from "./pages/CreateTask.js"

function App() {

  return (
    <>
    <nav>
      <u1>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/CreateTask">Create Task</Link>
        </li>
      </u1>
    </nav>
    
    <Routes>
          <Route path="/" element={ <Home />} /> 
          <Route path="/CreateTask" element={ <CreateTask />} /> 
          
          <Route/>

    </Routes>
    </>
  );
    
}

export default App;
