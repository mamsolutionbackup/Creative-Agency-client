import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeMain from './Components/Home/HomeMain/HomeMain';
import Feedback from 'react-bootstrap/esm/Feedback';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminHome from './Components/Admin/AdminHome/AdminHome';
import UserHome from './Components/User/UserHome/UserHome';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import LoadingGif from './Components/SharedComponents/LodingGif/LoadingGif';
 export const loginContext = createContext()
function App() {
  const [loggedUser,setLoggedUser] = useState({name:"",email:"",photo:""})
  return (
    <BrowserRouter>
    <loginContext.Provider value={[loggedUser,setLoggedUser]}>
      <Container fluid style={{padding:"0px" }}>
     
      <Switch>
        <Route exact path="/">
        <HomeMain/>
        </Route>
        <Route path="/admin">
          <AdminHome></AdminHome>
        </Route>
        <Route path="/user">
          <UserHome/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
      </Switch>
    </Container>
    </loginContext.Provider>
    </BrowserRouter>

     
  );
}

export default App;
