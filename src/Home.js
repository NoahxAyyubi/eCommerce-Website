import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from './Product';
import Slider from 'react-slick'; // Import Slider component
import "slick-carousel/slick/slick.css"; // Default styling
import "slick-carousel/slick/slick-theme.css"; // Default theme
import axios from 'axios';

function Home() {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8557/api/products/productinfo') // Replace with your backend API endpoint
            .then((response) => {
                const products = response.data;
                setProductData(products);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

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
                {productData.slice(0, 2).map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                        image={product.image}
                    />
                ))}
                {/* Standalone image */}
                <div className="product">
                    <img src="/Screenshot 2024-01-16 at 5.47.23 AM.png" alt="Additional Item" />
                </div>
            </div>

            <div className="home__productsrow2">
                {productData.slice(2, 5).map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
