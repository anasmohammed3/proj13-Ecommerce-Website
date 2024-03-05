import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Get favorites from local storage
        const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(existingFavorites);
    }, []);

    const removeFromFavorites = (productId) => {
        // Remove the product from favorites
        const updatedFavorites = favorites.filter(favorite => favorite.id !== productId);
        setFavorites(updatedFavorites);
        // Update local storage
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <section className='fovarits'>
            <h2>Favorite Products</h2>
            <div className="favorite-products">
                {favorites.map((favorite) => (
                     <div>
                    <div key={favorite.id} className="favorite-product">
                        <img src={favorite.imageUrl} alt={favorite.title} />
                        <div className="fovarite-proText">
                            <h4>{favorite.title}</h4>
                            <FontAwesomeIcon
                                className="fov"
                                icon={faHeart}
                                onClick={() => removeFromFavorites(favorite.id)}
                            />
                            </div>
                            </div>
                    </div>
                ))}
            </div>

            <div className="all">
        <Link className="theAll" to="/">
          go back
        </Link>
        </div>
        </section>
    );
};

export default Favorites;
