import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

// Selectors
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckOutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map( cartItem => cartItem.name)}

        <div className='total'>
            <span> TOTAL: ${total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckOutPage);
