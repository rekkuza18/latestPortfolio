import myLogo from "../../assets/logos/renLogo.svg";

function Header() {
  return (
    <header>
      <nav className="container-fluid nav">
        <div className="container">
            <div className="nav-inner">
                <img src={ myLogo } alt="My Logo" className="nav-logo" />
                <ul className="nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Projects</li>
                    <li className="nav-item">Contact</li>
                </ul>
            </div>
          <a className="btn nav-btn">Download CV</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
