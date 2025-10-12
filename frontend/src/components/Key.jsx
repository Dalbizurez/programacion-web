export default function Key({ value }) {

    const handleClick = () => {
        navigator.clipboard.writeText(value);
        alert("Key copied to clipboard");
    };

    const handleEnter = () => {
        document.getElementsByClassName("key")[0].style.cursor = "pointer";
    };

    return (
        <div className="key">
            <h3 onClick={handleClick} onMouseEnter={handleEnter}><u>{value}</u></h3>
        </div>
    );
}
