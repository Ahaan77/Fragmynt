import React from 'react';
import Head from 'next/head';
import jwt from 'jsonwebtoken'
import {useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'


export function Login(req,res){
  const [email_id, setEmail] = useState<string>('')
  
  const [password, setPassword] = useState<string>('')

  const [message, setMessage] = useState<string>('')

  const router = useRouter();

  async function submitForm(){
    const res= await fetch ('-',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ email_id, password})
    }).then((t)=> t.json())

    const token = res.token

    if(token){
      const json = jwt.decode(token) as {[key: string]:string}
      console.log(json)
    }

    await router.push('/successPage');

    

  }
  
  return(
    
    <form method="POST" action="/api/success">
      <center>
      <h3> Please Login </h3>
      <input type="email_id" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/><br/>
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/><br/>
      <Link href="/successPage">
          <input type="button" value="Login" onClick={submitForm} />
        </Link>
      </center>
    </form>

    
    
    
  );
};

export default Login;