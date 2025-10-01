
export default function Button({ href = "#", className = "", btnText = "" }) {
    return (
        <a href={ href } className={`primary-btn ${ className }`}>{ btnText }</a>        
    );
}