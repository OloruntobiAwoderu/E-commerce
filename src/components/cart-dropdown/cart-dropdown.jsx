import React from "react";
import CustomButton from "../Button/custom-button";
import "./cart-dropdown.scss";
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item'
import { selectCartItemsCount } from '../../redux/cart/cart-selector'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);
const mapStateToProps = createStructuredSelector({
 cartItems: selectCartItemsCount
});

export default withRouter(connect(mapStateToProps)(CartDropdown));