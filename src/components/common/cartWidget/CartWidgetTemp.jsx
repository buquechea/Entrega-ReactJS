import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';

const CartWidget = ({ itemCount }) => {
    return (
        <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Badge badgeContent={itemCount} color="primary">
                <AddShoppingCartIcon />
            </Badge>
        </Link>
    );
};

export default CartWidget;
