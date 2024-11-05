import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
                );
            } else {
                return [...prevCart, product];
            }
        });
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const data = {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalItems,
    };

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
