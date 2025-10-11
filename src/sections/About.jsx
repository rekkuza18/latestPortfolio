import aboutImage from '../assets/thumbnails/about-image-thumbnail.png';

function About() {
    return (
        <section id="about" className="about">
            <div className="container-fluid">
                <div className="about-wrapper container">
                    <div className="row">
                        <div className="col-lg-7 about-image-container">
                             <img src={ aboutImage } className="about-image" alt="about image thumbnail" loading="lazy" />
                       </div>
                        <div className="col-lg-5 about-description-container">
                            <h3 className="about-title bar-left">About me</h3>
                            <p>
                                Hi there! I’m Warren Equinan, a passionate web designer with two years of experience in web design. I am proficient in HTML, CSS (Bootstrap), JavaScript (including jQuery), and PHP, I thrive on crafting visually stunning and user-friendly websites.
                            </p>
                            <p>
                                Throughout my career, I have collaborated with various companies to develop, design, and maintain their websites and subsidiaries’ sites using technologies like Bootstrap, WordPress, and page builders such as Divi and Elementor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;

