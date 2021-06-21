import React from "react";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function MyBasket(props) {
  //    let tot = amount * 75
  //    return tot
  //  }
  // console.log(props.basket);
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

  function handleminus(evt) {
    console.log("decrease qty");
    console.log(amount);
    if (amount > 0) {
      setAmount(amount - 1);
    } else if (amount === 0) {
      console.log("delete meeee");
      // props.removeFromBasket();
    }
  }

  function handleplus(evt) {
    console.log(amount);
    console.log("increase qty");
    setAmount(amount + 1);
  }

  // We derive the localtotal every render, based on the new amount variable
  const localtotal = amount * 75;

  return (
    <li className="basket-display">
      <img className="image-basket" src={process.env.PUBLIC_URL + `/beers/${props.label}`} alt="beerlabel" />
      <p className="itemname-basket">{props.name}</p>
      <div className="beer-add">
        {" "}
        <MinusCircleOutlined onClick={handleminus} />
        <p>{amount}</p>
        <PlusCircleOutlined onClick={handleplus} />
      </div>
      <p className="localtotalprice-basket">{localtotal} kr</p>
    </li>
  );
}
