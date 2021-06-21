import MyBasket from "./mybasket";

const Basket = (props) => {
  return (
    <div className="Basket">
      <MyBasket
        total={props.total}
        basket={props.basket}
        removeFromBasket={props.removeFromBasket}
        addToBasket={props.addToBasket}
      />
    </div>
  );
};
export default Basket;
