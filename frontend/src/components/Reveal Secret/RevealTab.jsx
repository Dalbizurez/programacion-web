import { useState } from "react";

import KeyBox from "./KeyBox";
import Secret from "./Secret";

export default function ShowTab(){
    const [secret, setSecret] = useState("");

    function getSecretFromApi(){
        const key = document.getElementById("keybox").value;
        if (key) setSecret("shhhhh");
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
