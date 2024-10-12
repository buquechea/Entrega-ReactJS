import React from 'react';
import CartWidget from '../../common/cartWidget/CartWidgetTemp';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                
                <Link className="navbar-brand" to="/">
                    Libreria La Mosca
                </Link>
                <div className="navbar-nav">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/products">Productos</Link>
                    <Link className="nav-link" to="/contact">Contacto</Link>  
                </div>
                <CartWidget itemCount={3} />
            </div>
        </nav>
    );
};

export default Navbar;
