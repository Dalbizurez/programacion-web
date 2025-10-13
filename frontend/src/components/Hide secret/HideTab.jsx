import { useState, useEffect } from "react";

import SecretBox from "./Secretbox";
import Key from "./Key";

export default function HideTab() {
    const [secret, setSecret] = useState("");
    const [key, setKey] = useState(null);

    useEffect(() => {
        if (!secret) {
            setKey(null);
            return;
        }


        encryptSecret();
    }, [secret]);

    function getSecret() {
        setSecret(document.getElementById("secret").value);
    }

    async function encryptSecret() {
        const response = await fetch('http://localhost:8000/encrypt/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ secret: secret }),
        });
        const data = await response.json();
        if (response.ok) {
            setKey(data.key);
        } else {
            console.error('Error encrypting secret:', data);
        }

    }

    function switchComponent() {
        if (secret) {
            const key = encryptSecret();
            return <div>
                <Key value={key} />
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
            { secret ? (
                <div>
                    <Key value={key} />
                    <button onClick={() => setSecret("")}>New secret</button>
                </div>
            ) : (
                <SecretBox onClick={handleClick} />
            )}
        </div>
    );
}