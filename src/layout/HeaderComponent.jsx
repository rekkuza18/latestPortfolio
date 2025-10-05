import myLogo from "../assets/logos/renLogo.svg";
import Button from "../components/Button";
import { useState, useEffect, useRef} from "react";

function HeaderComponent() {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {

    const handleScroll = () => {
      
        if (!navRef.current) return;
        const navHeight = navRef.current.clientHeight;

        window.scrollY > navHeight ? setScrolled(true) : setScrolled(false);

    } 

    const handleClick = () => {
        if (navRef && !navRef.current.contains(event.target)) {
          setToggle(false);
          setIsOpen(false);
        }
    }

    document.body.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.body.removeEventListener('click', handleClick);
    };
  }, [])


  function toggleClass() {
     setToggle((toggle) => !toggle);
     setIsOpen((isOpen) => !isOpen );
  }

  return (
    <>
      <header>
       <nav className={`container-fluid nav ${scrolled ? "fixed" : ""}`} ref={navRef}>
        <div className="container">
            <div className="nav-inner">

                <img src={ myLogo } alt="My Logo" className="nav-logo" loading="lazy"/>
                
                <div className={`nav-menu-icon d-lg-none ${toggle ? "toggle" : ""}`} onClick={toggleClass}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-list ${isOpen ? "toggle" : ""}`}>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Contact</a>
                    </li>
                     <li className="nav-item d-lg-none d-flex">
                        <Button href="#" btnText="Download CV" className="nav-btn-2" />
                    </li>
                </ul>

            </div>
          <Button href="#" btnText="Download CV" className="nav-btn d-none d-lg-flex" />
        </div>
      </nav>
    </header>
    </>
  );
}

export default HeaderComponent;
