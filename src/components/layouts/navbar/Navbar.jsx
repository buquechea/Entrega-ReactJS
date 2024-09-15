import React from 'react';
import CartWidget from '../../common/cartWidget/CartWidgetTemp';
import Button from '../../common/button/Button';


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Libreria La Mosca
          </a>
          <Button titulo="Home" titulo1="Productos" titulo2="Contacto" />
          <CartWidget />
        </div>
      </nav>
    );
  };

export default Navbar;