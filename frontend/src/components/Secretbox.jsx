

export default function SecretBox( { onClick } ) {
    return (
        <div className="secret-box">
            <input type="text" name="secret" id="secret" placeholder="Enter your secret" />
            <br />
            <button onClick={onClick} >Save secret</button>
        </div>
    );
}
