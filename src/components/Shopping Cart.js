import React from 'react';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
const ShoppingCart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    const handlePayNow = () => {
        setTimeout(() => {
            alert('Payment completed successfully');
            emptyCart(); // Reset the cart
        }, 1000);
    };

    if (isEmpty) return <h1 className="text-center theCart">Your cart is empty</h1>;

    return (
        <section className='py-4 container'>
            <div className="row justify-content-center shopping-cart">
                <div className='col-12'>
                    <h5>Cart ({totalUniqueItems}) Total Items:({totalItems})</h5>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src={item.imageUrl} style={{ height: "6rem" }} alt={item.title} />
                                    </td>
                                    <td className='theWords'>{item.title}</td>
                                    <td className='theWords'>{item.price}</td>
                                    <td className='theWords'>Quantity ({item.quantity})</td>
                                    <td>
                                        <button className=' ms-2 control' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                        <button className=' ms-2 control' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                        <button className='btn btn-danger ms-2' onClick={() => removeItem(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='col-auto ms-auto'>
                    <h2>Total Price: SAR {cartTotal}</h2>
                </div>
                <div className='col-auto'>
                    <button className='btn btn-danger m-2' onClick={() => emptyCart()}>Clear Cart</button>
                    <button className='btn btn-primary' onClick={handlePayNow}>Pay Now</button>
                </div>
            </div>
            <div className="all">
        <Link className="theAll" to="/">
          go back
        </Link>
        </div>
        </section>
    );
};

export default ShoppingCart;
