import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping, faUser, faS, faRightToBracket, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Navbar1 = () => {
    const { totalItems, items, updateItemQuantity, cartTotal } = useCart(); 
    const [showCart, setShowCart] = useState(false);
    const [isUserSignedUp, setIsUserSignedUp] = useState(false);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        const navSign1 = document.getElementById('navSign');
        const user1 = document.getElementById('user');

        if (storedUsername && storedPassword) {
            setIsUserSignedUp(true);
            if (navSign1) navSign1.style.display = 'none';
            if (user1) user1.style.display = 'flex';
        }
    }, []);

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    return (
        <div className="navbar1">
            <Navbar expand="lg">
                <Container>
                    {/* __________________________________________________________________________________________________ */}
                    <Navbar.Brand href="#home" className="lap"><span>L</span>apHub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* __________________________________________________________________________________________________ */}
                        <Nav className="m-auto"> {/* Align links in the center */}
                            <Nav.Link href="#home" className="link">Home</Nav.Link>
                            <Nav.Link href="#products" className="link">Products</Nav.Link>
                            <Nav.Link href="#contact" className="link">Contact</Nav.Link>
                        </Nav>
                        {/* __________________________________________________________________________________________________ */}
                        <div className="right ms-auto"> {/* Align social links and button to the right */}
                        <Link to="/fov">
                                <FontAwesomeIcon className="i" icon={faHeart} />
                                </Link>
                            <ul id="user_info">
                                <li className="shopping_cart" id="cart-section">
                                <FontAwesomeIcon className="i heart" onClick={toggleCart} icon={faCartShopping} />

                                {isUserSignedUp ? <span className="badge" id="cart-badge">{totalItems}</span> : null}

                                    {showCart ? (
                                        <div className="carts_products">
                                            <div className="cart-content">
                                                <h3>Your Cart</h3>
                                                <div id="cart-products">
                                                    {items.map(item => (
                                                        <div className="cart-item" key={item.id}>
                                                            <div className="cart-item-desc">
                                                                <p>{item.title} </p>
                                                                <p>SAR {item.price}</p>
                                                            </div>
                                                            <div className="cart-item-quan">
                                                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                                                    <FontAwesomeIcon icon={faPlus} />
                                                                </button>
                                                                <p>{item.quantity}</p>
                                                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                                                    <FontAwesomeIcon icon={faMinus} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <h5>Total Price: SAR {cartTotal}</h5>
                                                    <Link to="/cart">View all products</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ):null}
                                </li>
                            </ul>
                            <div className="theUser">
                                <Link to="/me">
                                    <FontAwesomeIcon className="i user" id="user" icon={faUser} />
                                </Link>
                                <p>Me</p>
                            </div>
                            <div className="navSign" id="navSign">
                                <div className="navSign-up">
                                    <Link to="/signup">
                                        <FontAwesomeIcon className="i" icon={faS} />
                                    </Link>
                                    <p>sign up</p>
                                </div>
                                <div className="navSign-in">
                                    <Link to="/signin">
                                        <FontAwesomeIcon className="i" icon={faRightToBracket} />
                                    </Link>
                                    <p>Log in</p>
                                </div>
                            </div>
                        </div>
                        {/* __________________________________________________________________________________________________ */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navbar1;
