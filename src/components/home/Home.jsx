import { useEffect } from 'react';
import particleConfig from '../../assets/js/particle-config';
import Button from '../Button';

function Home() {

    useEffect(() => {
        if (!window.particlesJS) return;
        window.particlesJS("particles-js", particleConfig);
    }, []);

    return(
        <section id="homeSection" className="hero">
           <div id="particles-js" className="particles"></div>
           <div className="container hero-wrapper">
                <p className="hero-text">Hello, My name is</p>
                <h1 className="hero-heading">Warren Equinan</h1>
                <p className="hero-text hero-description">A Creative <span>Front-End Web Developer.</span></p>
                <Button href="#about" className="hero-btn" btnText="Read More" />
           </div>
        </section>
    )
}

export default Home;