import { useState } from "react";

import SecretBox from "./Secretbox";
import Key from "./Key";

export default function HideTab() {
    const [secret, setSecret] = useState("");

    function getSecret() {
        setSecret(document.getElementById("secret").value);
    }

    function encryptSecret() {
        /*
        fetch('http://localhost:8000/encrypt/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ secret: secret }),
        })
        .then(response => response.json())
        .then(data => {
            alert(data)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        */

        return "shhhh";

    }

    function switchComponent() {
        if (secret) {
            return <div>
                <Key value={encryptSecret()} />
                <button onClick={() => setSecret("")}>New secret</button>
            </div>
        } else {
            return <SecretBox onClick={handleClick} />
        }
    }

    function handleClick() {
        getSecret();
        switchComponent();
    }

    return (
        <div className="hide-tab">
            {switchComponent()}
        </div>
    );
}