import React, { useState } from "react";
import RegisterForm from './registerForm';
import * as action from '../../actions/index';
import { Redirect } from "react-router-dom";

export function Register() {
   const [errors,setErrors]=useState([]);

   const [redirect,setRedirect]=useState(false);

    function registerUser(userdata){
        
     action.register(userdata).then(
        (registered)=>{ setRedirect(true)},
        (err)=>{  
            setErrors(err)
        }
     )
    }
    if(redirect){
     return <Redirect to={{pathname:'/login',state:{successRegister:true}}}/>
    }
    return (
        <section id='register'>
        <div className='bwm-form'>
          <div className='row'>
            <div className='col-md-5'>
              <h1>Register</h1>
              <RegisterForm submitCb={registerUser} errors={errors}/>
            </div>
            <div className='col-md-6 ml-auto'>
              <div className='image-container'>
                <h2 className='catchphrase'>As our member you have access to most awesome places in the world.</h2>
                <img src={process.env.PUBLIC_URL+'/register-image.jpg'} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}