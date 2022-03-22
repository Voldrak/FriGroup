import Home from './Components/Pages/Home'
import CreateGroup from './Components/Pages/CreateGroup'
import FindGroup from './Components/Pages/FindGroup'
import GroupDescription from './Components/Pages/GroupDescription';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
 
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/create_group" element={<CreateGroup />}/>
      <Route path="/find_group" element={<FindGroup />}/>
      <Route path="/find_group/:id" element={<GroupDescription/>} />
      </Routes>
    </div>
  );
}

export default App;
