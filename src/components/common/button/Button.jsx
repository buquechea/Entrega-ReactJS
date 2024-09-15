import React from 'react';

const Button = ( { titulo, titulo1, titulo2 } ) => {
    return (
        <div>
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {titulo}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {titulo1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {titulo2}
                </a>
              </li>
            </ul>
          </div>
        </div>
    );
};

export default Button;