import React from 'react';
// css
import './styles.css'

const Home = () => {
    return (
        <div>

            <h1>hello world</h1>
            
            <section id="intro">
                <h1>Need Junk Removal? Furniture Moved? Give Us A Call</h1>
                {/* <img className='intro-pic' src={require("../../Components/Photos/trailor3.jpeg")} alt="bg" /> */}
            </section>

            <h1>Customer Satisfaction Guaranteed</h1>

            <section id="testimonials">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={require("../../Components/Photos/customer.png")} className="d-block w-100" alt="first pic" />
                        </div>
                        <div className="carousel-item">
                            <img src={require("../../Components/Photos/customer2.jpeg")} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={require('../../Components/Photos/customer3.jpeg')} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={require('../../Components/Photos/customer4.jpeg')} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <footer>
                <div className='footer-info'>
                    <h3>LOPEZ MOVES IT</h3>
                </div>
                <div className='footer-info'>
                    <h3>ABOUT</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quam quos, provident delectus dicta asperiores consequatur vitae corporis debitis placeat voluptatum! Aperiam nesciunt harum perspiciatis sed obcaecati soluta asperiores placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vero suscipit sapiente esse aperiam tempora fuga! Dolorem ut labore eius, ab quo corporis molestiae atque consectetur laboriosam asperiores aperiam beatae!</p>
                </div>
                <div className='footer-info'>
                    <h3>CONTACT US</h3>
                    <p>phone number</p>
                    <p>email info</p>
                </div>
            </footer>

        </div>
    );
}

export default Home;
