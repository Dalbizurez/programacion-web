import { useState, useEffect } from "react";

import KeyBox from "./KeyBox";
import Secret from "./Secret";

export default function RevealTab(){
    const [secret, setSecret] = useState("");


    async function getSecretFromApi(){
        const key = document.getElementById("keybox").value;
        if (key) {
            const response = await fetch(`http://localhost:8000/decrypt/?k=${key}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            if (response.ok) {
                setSecret(data.secret);
            } else {
                alert( "No secret found" );
                console.error('Error decrypting secret:', data);
            }
        }
    }

    function switchComponent() {
        if (secret) {
            return (
                <div>
                    <Secret secret={secret} />
                </div>
            );
        } else {
            return <KeyBox onClick={handleClick} />
        }
        
    }
    
    
    function handleClick() {
        getSecretFromApi();
        switchComponent();
    };

     return (
            <div className="show-tab">
                {switchComponent()}
            </div>
            );
}
