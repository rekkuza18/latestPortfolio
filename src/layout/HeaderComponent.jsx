import myLogo from "../assets/logos/renLogo.svg";
import Button from "../components/Button";

function HeaderComponent() {
  return (
    <header>
      <nav className="container-fluid nav">
        <div className="container">
            <div className="nav-inner">
                <img src={ myLogo } alt="My Logo" className="nav-logo" />
                <ul className="nav-list">
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
                     <li className="nav-item d-lg-none d-md-block ">
                        <Button href="#" btnText="Download CV" />
                    </li>
                </ul>
            </div>
          <Button href="#" btnText="Download CV" className="nav-btn" />
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;
