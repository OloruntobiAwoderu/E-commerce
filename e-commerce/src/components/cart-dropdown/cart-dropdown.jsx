import React from "react";
import CustomButton from "../Button/custom-button";
import "./cart-dropdown.scss";
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item'
import { selectCartItemsCount } from '../../redux/cart/cart-selector'
import { createStructuredSelector } from 'reselect'


const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
 cartItems: selectCartItemsCount
});

export default connect(mapStateToProps)(CartDropdown);