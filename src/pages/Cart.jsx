import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import styles from "./cart.module.css";

export default function Cart() {
  const { cart, removeFromCart, addToCart } = useContext(CartContext);

  const totalValue = cart.reduce((sumValue, item) => sumValue + item.value * item.quantity, 0);

  return (
    <div className={cart.length === 0 ? '' : styles.cartContainer}>
      
      {cart.length === 0 ? (
        <p className={styles.emptyCart}>Carrinho vazio</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cart.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <h3>{item.name}</h3>
                <img className={styles.cartImage} src={item.image} alt="Relógio" />
                <p>{item.value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}</p>
                <p>Quantidade: {item.quantity}</p>
                <div className={styles.cartActions}>
                  <button
                    className={styles.btn}
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                  <button className={styles.btn} onClick={() => {
                    if(window.confirm(`deseja remover ${item.name} do carrinho?`))
                    removeFromCart(item.id)}}>
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.totalContainer}>
            <div className={styles.divTotal}>
            <h3>Total:</h3>
            <p>
              {totalValue.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            </div>
            <div className={styles.divButtonFinish}>
              <button className={styles.buttonFinish}>Finaliza compra</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
