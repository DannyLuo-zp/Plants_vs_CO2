import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login(props){
    const [email,setEmail] =useState("");
    const [password,setPassword]=useState("");
    const validForm=()=>{
        return email.length>=3 && password.length>=3;
    }
    const submitPressed=(e)=>{
        
    }
    return(
        <div className="Login">
            <form onSubmit={submitPressed}>
                <FormGroup controlId="email" bsSize="large">
                    <FormLabel>Email</FormLabel>
                    <FormControl 
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <FormLabel>Password</FormLabel>
                    <FormControl 
                        
                        type="email"
                        value={password}
                        onChange={e=> setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <Button block bsSize="large" disabled={!validForm()} type="submit">
                    Log In
                </Button>
            </form>
        </div>
    );
}
