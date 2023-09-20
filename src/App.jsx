import React from 'react';
import './App.css';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import instance from 'axios';


function App() {

  const userSchema = yup.object().shape({

    fullName:yup.string().required("Please enter your Full name"),
    email:yup.string().email().required("Please enter your Email"),
    password:yup.string().min(8).required("Please enter your Password")
  
  });
  
  const {handleSubmit, register, formState:{errors}} = useForm({
    resolver:yupResolver(userSchema),
  });
  
  const formSubmit = (data) =>{
    console.log(data);
    
    instance.post('http://localhost:4000/api/v1/userRegister', data)
  }

  return (
    <div>
      
      <form className="div-form" onSubmit={handleSubmit(formSubmit)}>
        <div>

            <h1>Login</h1>

            
            <label class="label-field" for="name">Full Name</label>
            <input class="form-control" type="text" id="name" aria-describedby="emailHelp" {...register("fullName")}></input>
            <p class="label-line">{errors.fullName?.message}</p>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="label-field">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email")}></input>
              <p class="label-line">{errors.email?.message}</p>
              <div id="emailHelp" class="label-line cl-">We'll never share your email with anyone else.</div>
            </div>
            
            {/*<label class="label-field" for="email">Email address</label>
            <input class="input-field" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>*/}
            

            
            <label class="label-field" for="password">Password</label>
            <input class="form-control" type="password" className="form-control" id="password" {...register("password")}></input>
            <p class="label-line">{errors.password?.message}</p>

            
            <button>Submit</button>
            

        </div>

      </form>

    </div>
  );
}

export default App;
