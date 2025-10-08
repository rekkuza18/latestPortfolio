import { useEffect } from 'react';
import particleConfig from '../assets/js/particle-config'

function Home() {

    useEffect(() => {
            
        if (window.particlesJS) {
            window.particlesJS("particles-js", particleConfig);
        }

    }, []);

    return(
        <section id="homeSection" className="hero">
             <div id="particles-js" className="particles"></div>
           <div className="container hero-wrapper">
                <p className="hero-text">Hello, My name is</p>
                <h1 className="hero-heading">Warren Equinan</h1>
                <p className="hero-text hero-description">A Creative <span>Front-End Web Developer.</span></p>
                <a href="#" className="primary-btn hero-btn">READ MORE</a>
           </div>
        </section>
    )
}

export default Home;