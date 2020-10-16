import React, { useContext } from 'react';

import * as firebase from "firebase/app";
import "firebase/auth";
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './login.css'
import logo from '../../images/logos/logo.png'
 

import firebaseConfig from './Authentication';
import { loginContext } from '../../App';
firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [loggedUser,setLoggedUser] = useContext(loginContext);
    const history= useHistory();
    const location = useLocation();
    let { from } = location.state  || { from: { pathname: "/" } };
    const handleGoogle=()=>{
        const  provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result=> {
            let newUser = {
                email:result.user.email,
                name:result.user.displayName,
                photo:result.user.photoURL
            }
            fetch(`http://localhost:5000/getAdmin?email=${newUser.email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if (data) {
                    setLoggedUser(newUser)
                    history.push('/admin')
                }
                else{
                    setLoggedUser(newUser)
                    console.log(from);
                    if (from.pathname =='/admin') {
                        history.replace('/');
                    }
                    else{
                        history.replace(from);
                    }
                  
                }
            })
           
            
          }).catch(function(error) {
           
            var errorCode = error.code;
            
             
          });
          
    }

    return (
        <div id= "parent">
            
            <img src={logo} alt="" width="150px" />
            <Form className="login-form" >
                <h4 style={{ textAlign: "center", paddingBottom: "20px", fontWeight: "bold" }}>Login With</h4>
                <p style={{ color: "red" }}>  </p>


                <Button id="sigining-btn" variant="light" onClick={handleGoogle} >
                    <FcGoogle style={{ fontSize: "36px" }}/> 
                    Continue With Facebook
                  </Button>
                  <h6 style={{marginTop:"15px"}}>Dont have an account ?? 
                <Link to="">
                        <span>  Create an account</span>
                </Link>
                </h6>

            </Form>

        </div>
    );
};

export default Login;

