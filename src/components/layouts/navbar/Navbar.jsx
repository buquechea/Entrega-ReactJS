import React, { useContext } from 'react';
import CartWidget from '../../common/cartWidget/CartWidgetTemp';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Navbar = () => {
    const { getTotalItems } = useContext(CartContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Libreria La Mosca
                </Link>
                <div className="navbar-nav">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/contact">Contacto</Link>
                </div>
                <CartWidget itemCount={getTotalItems()} />  
            </div>
        </nav>
    );
};

export default Navbar;

