import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import styles from "./cart.module.css";

export default function Cart() {
  const { cart, removeFromCart, addToCart } = useContext(CartContext);

  return (
    <div className={styles.cartContainer}>
      <h2>Carrinho</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <ul className={styles.cartList}>
          {cart.map((item) => (
            <li key={item.id} className={styles.cartItem}>
              <h3>{item.name}</h3>
              <img className={styles.cartImage} src={item.image} alt="Relógio" />
              <p>R$: {item.value}</p>
              <p>Quantidade: {item.quantity}</p>
              <div className={styles.cartActions}>
                <button
                  className={styles.btn}
                  onClick={() => addToCart(item)}
                  disabled={item.quantity >= item.stock}
                >
                  +
                </button>
                <button className={styles.btn} onClick={() => removeFromCart(item.id)}>
                  Remover
                </button>
              </div>
              <p>Estoque disponível: {item.stock - item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
