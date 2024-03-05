import React, { useState, useEffect } from 'react';
import { Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from 'react-use-cart';


const ProductImages = ({ title, description, imageUrl, price, product }) => {
    const { addItem } = useCart();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Check if the product is in favorites when the component mounts
        const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isAlreadyFavorite = existingFavorites.some(favorite => favorite.id === product.id);
        setIsFavorite(isAlreadyFavorite);
    }, [product.id]);




    const handleAddToCart = () => {
        // Check if user is signed up, if not, redirect to signup component
        const isUserSignedUp = localStorage.getItem('username') && localStorage.getItem('password');
        if (!isUserSignedUp) {
            // Redirect to signup component
            window.location.href = '/signup';
        } else {
            // Add item to cart
            addItem(product);
        }
    };


    const handleAddToFavorites = () => {
        // Toggle favorite status
        setIsFavorite(prev => !prev);
    
        // Check if user is signed up
        const isUserSignedUp = localStorage.getItem('username') && localStorage.getItem('password');
        if (!isUserSignedUp) {
            // Redirect to signup component
            window.location.href = '/signup';
            return; // Exit the function
        }
    
        // Get existing favorites from local storage
        const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
        // Check if the product is already in favorites
        const isAlreadyFavorite = existingFavorites.some(favorite => favorite.id === product.id);
        
        // If the product is already in favorites, remove it
        if (isAlreadyFavorite) {
            const updatedFavorites = existingFavorites.filter(favorite => favorite.id !== product.id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
            // Add the product to favorites
            const updatedFavorites = [...existingFavorites, product];
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
    };
    

    return (
        <Col sm={6} md={4}>
            <div className="pro">
                <div className="proImg">
                    <img src={imageUrl} alt={title} />
                </div>
                <div className="proText">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="add">
                        <h4>SAR {price}</h4>
                        <Button onClick={handleAddToCart}>Add to cart <FontAwesomeIcon icon={faCartShopping} /></Button>
                        <FontAwesomeIcon className="heart" icon={faHeart} onClick={handleAddToFavorites} style={{ color: isFavorite ? 'red' : 'black' }} />
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default ProductImages;
