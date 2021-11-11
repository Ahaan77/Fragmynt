import {useEffect, useState} from "react";

export default function Home() {
    const [message, setMessage] = useState('');
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await fetch('/api/success', {
                        credentials: 'include',
                    });

                    const content = await response.json();

                    setMessage(`Hi ${content.name}+ you have successfully logged in!`);
                    setAuth(true);
                    console.log(auth);
                } catch (e) {
                    setMessage('You are not logged in');
                    setAuth(false);
                    console.log(auth);
                    
                    
                    
                }
            }
            
        )();
    });

    return (

        <center><h1>{message}</h1></center>  
        
    )
}