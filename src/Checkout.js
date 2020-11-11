import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Jupiter_2020/PHASE-4/ILM/NCEMI_12/12_Category_ILM_640x45._CB416593602_.jpg"
          alt="amazon ad"
          className="checkout-ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Shopping Cart is Empty</h2>
            <p>
              You have no items in your basket now. Please click the 'add to
              basket' button next to item.
            </p>
          </div>
        ) : (
          <div>
            <h2>Your Shopping Cart</h2>
            {basket?.map((item) => {
              return (
                <CheckoutProduct
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout-right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
