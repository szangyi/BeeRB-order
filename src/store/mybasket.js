import React from "react";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function MyBasket(props) {
  return (
    <section className="MyBasket">
      <ul>
        {props.basket.map((item) => (
          <CartItem
            total={props.total}
            name={item.name}
            category={item.category}
            amount={item.amount}
            key={item.name}
            label={item.label}
            removeFromBasket={props.removeFromBasket}
            addToBasket={props.addToBasket}
            basket={props.basket}
          />
        ))}
      </ul>
      <div className="total-basket">
        <h2>Total:</h2>
        <h2 className="totalamount-basket">{props.total} kr</h2>
      </div>
    </section>
  );
}

function CartItem(props) {
  const [amount, setAmount] = useState(props.amount);

  function handleminus(itemName) {
    if (amount > 0) {
      //set local state
      setAmount(amount - 1);
      //remove one piece of an item from the basket
      props.addToBasket((props.basket.find(item=> item.name === props.name)), amount - 1)
    } else if (amount === 0) {
      //remove an item from the basket completely
      props.removeFromBasket(itemName);
    }
  }

  function handleplus() {
    //set local state
    setAmount(amount + 1);
    //add one piece of an item to the basket
    props.addToBasket((props.basket.find(item=> item.name === props.name)), amount + 1)
  }

  // We derive the localtotal every render, based on the new amount variable
  const localtotal = amount * 75;

  return (
    <li className="basket-display">
      <img className="image-basket" src={process.env.PUBLIC_URL + `/beers/${props.label}`} alt="beerlabel" />
      <p className="itemname-basket">{props.name}</p>
      <div className="beer-add">
        {" "}
        <MinusCircleOutlined onClick={()=>handleminus(props.name)} />
        <p>{amount}</p>
        <PlusCircleOutlined onClick={()=>handleplus()} />
      </div>
      <p className="localtotalprice-basket">{localtotal} kr</p>
    </li>
  );
}
