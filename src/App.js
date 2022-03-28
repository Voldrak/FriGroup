import Home from './Components/Pages/Home';
import CreateGroup from './Components/Pages/CreateGroup';
import FindGroup from './Components/Pages/FindGroup';
import Calendary from './Components/Pages/Calendary';
import GroupDescription from './Components/Pages/GroupDescription';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useStateValue } from "./Components/Libs/StateProvider";
import './App.css';

function App() {

  const auth = getAuth();
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/create_group" element={<CreateGroup />}/>
      <Route path="/find_group" element={<FindGroup />}/>
      <Route path="/find_group/:id" element={<GroupDescription/>} />
      <Route path="/calendary" element={<Calendary/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />


      </Routes>
    </div>
  );
}

export default App;
