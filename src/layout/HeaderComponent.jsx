import myLogo from "../assets/logos/renLogo.svg";
import Button from "../components/Button";
import { useState } from "react";

function HeaderComponent() {

  const [toggle, setToggle] = useState(false);

  function toggleClass() {
     setToggle(() => !toggle);
  }

  //nav-menu-icon d-lg-none
  return (
    <header>
      <nav className="container-fluid nav">
        <div className="container">
            <div className="nav-inner">

                <img src={ myLogo } alt="My Logo" className="nav-logo" />
                
                <div className={`nav-menu-icon d-lg-none ${toggle ? "toggle" : ""}`} onClick={toggleClass}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-list ${toggle ? "toggle" : ""}`}>
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
  );
}

export default HeaderComponent;
