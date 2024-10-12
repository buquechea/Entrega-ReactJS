import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';

const CartWidget = ({ itemCount }) => {
    return (
        <div>
            <Badge badgeContent={itemCount} color="primary">
                <AddShoppingCartIcon />
            </Badge>
        </div>
    );
};

export default CartWidget;
