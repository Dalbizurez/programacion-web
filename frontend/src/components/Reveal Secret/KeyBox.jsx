
export default function KeyBox({ onClick }) {
    return (
        <div className="key-box">
            <input type="text" name="keybox" id="keybox" placeholder="Paste your key here" />
            <br />
            <button onClick={onClick}>Reveal</button>
        </div>
    );
}
