import arrowRight from '../assets/icons/arrow-right.svg';

export default function Button(
    {
        href = "#", 
        className = "", 
        btnText = "", 
        hasArrow = false
    }
) {
    return (
        <a 
        href={ href }
        className={`primary-btn ${hasArrow && 'has-arrow'} ${className && className}`}
        >
            { btnText } { hasArrow && <img src={ arrowRight } class="arrow-icon" /> }
        </a>        
    );
}