import myLogo from "../../assets/logos/renLogo.svg";

function HeaderComponent() {
  return (
    <header>
      <nav className="container-fluid nav">
        <div className="container">
            <div className="nav-inner">
                <img src={ myLogo } alt="My Logo" className="nav-logo" />
                <ul className="nav-list">
                    <li className="nav-item">
                      <a class="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a class="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                      <a class="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                      <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
          <a className="btn nav-btn">Download CV</a>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;
