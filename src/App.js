import './App.css';
import React,{useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import NewRequest from './Components/NewRequest/NewRequest';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Footer from './Components/Footer/Footer';

const App = () => {

  const [status, setStatus] = useState(false);
  const [useremail, setUserEmail] = useState();

  const loginStatus = (status, useremail) => {
    console.log("App.js " + status + " " + useremail);
    // if(status == true){
      setStatus(status);
      setUserEmail(useremail);
      // console.log(status + " " + useremail);
    // }
  }

  return (
    <BrowserRouter>
      <Navbar loginStatus={status}/>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/newRequest' element={<NewRequest useremail={useremail} loginStatus={status} />} />
        <Route path='/login' element={<Login loginStatus={loginStatus} />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App;
