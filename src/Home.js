import React from 'react';
import './Home.css';
import Product from './Product';
import Slider from 'react-slick'; // Import Slider component
import "slick-carousel/slick/slick.css"; // Default styling
import "slick-carousel/slick/slick-theme.css"; // Default theme

function Home() {
    const slides = [
        
        "/1120679.jpg",
        "/intro-1611252336.jpg",
        "/amazon-prime-video-novita-catalogo-serie-tv-film-dicembre-2022 (1).jpg"
        
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="home">
            <div className="home__carousel">
                <Slider className="slider-container" {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index}>
                            <img src={slide} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="home__productsrow1">
                <Product
                    id="12345"
                    title="Amazon Echo | Smart speaker in Grey"
                    price={12.99}
                    rating={4}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                 <Product
                    id="9101112"
                    title="Apple AirPods Max Wireless Headphones"
                    price={9.99}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/81IfN-Rw8uL._AC_SX522_.jpg"
                />
                <div className="product">
                <img src="/Screenshot 2024-01-16 at 5.47.23 AM.png" alt="Additional Item" />
            </div>
            </div>

            <div className="home__productsrow2">
            <Product
                    id="56789"
                    title="Fitbit Pai Chai Watch for Fitness Tracking"
                    price={18.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                /> 
                <Product
                    id="13141516"
                    title="Coding for Dummies Java Script"
                    price={8.00}
                    rating={2}
                    image="https://m.media-amazon.com/images/I/51QAlEX+W1L._SY342_.jpg"
                />
                <Product
                    id="1718192021"
                    title="New Apple iPad Pro (12.9-inch, 128GB)"
                    price={18.49}
                    rating={3}
                    image="https://www.pbtech.co.nz/imgprod/T/A/TAAAPP96032.jpg?h=2736740794"
                />
            </div>
        </div>
    );
}

export default Home;
