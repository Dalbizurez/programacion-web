

export default function SecretBox( { onClick } ) {
    return (
        <div className="secret-box">
            <form action="" method="post">
                <input type="text" name="secret" placeholder="Enter your secret" />
                <br />
                <button onClick={onClick} >Save secret</button>
            </form>
        </div>
    );
}
