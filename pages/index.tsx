import {useState} from 'react'
import jwt from 'jsonwebtoken'
import Link from 'next/link'
import {useRouter} from 'next/router';


export default function Home(req,res){

  const [email_id, setEmail] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [message, setMessage] = useState<string>('')

  const router = useRouter();
  
  const url = `https://fragmynt-middleware-1.ojasmynt.repl.co/create_user?email_id=${email_id}`

  async function submitForm(){
    const res= await fetch (url,{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ email_id, username, password})
    }).then((t)=> t.json())

    const token = res.token

    if(token){
      const json = jwt.decode(token) as {[key: string]:string}
      console.log(json)
    }

    await router.push('/login');

    

  }

  return(

    
    <center>
    <div>
    <h2> Sign Up </h2>
      
      <form method="POST" action="https://fragmynt-middleware-1.ojasmynt.repl.co/create_user">
        <input type="text" placeholder="Email" name="email_id" value={email_id} onChange={(e) => setEmail(e.target.value)}/><br />
        
        <input type="text" placeholder="Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/><br />
        <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
        <Link href="/login">
          <input type="button" value="Login" onClick={submitForm} />
        </Link>




      </form>

    </div>
    </center>
  )
}