import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartPage = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return <p>El carrito está vacío</p>;
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h2>Carrito de Compras</h2>
            
            <ul>
                {cart.map((item) => (
                    <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
                        <div>
                            <h3>{item.title}</h3>
                            <p>Precio: {item.price} €</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Total: {item.price * item.quantity} €</p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} style={{ alignSelf: 'center', padding: '5px 10px' }}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>

            <h3>Total del carrito: {total} $</h3>

            <button onClick={clearCart} style={{ padding: '10px 20px', marginTop: '20px', backgroundColor: '#d9534f', color: 'white', border: 'none', borderRadius: '5px' }}>
                Vaciar Carrito
            </button>
        </div>
    );
};

export default CartPage;

