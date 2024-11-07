import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./rootLayout.module.css";

export default function RootLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <main className={styles.container}>
      <header className={isHome ? styles.contentHome : styles.header}>
        <Link className={isHome ? styles.nameHome : styles.linkName} to="/">
          Cronos Collection
        </Link>
        <nav>
          <Link
            className={isHome ? styles.inicioHome : styles.linkInicio}
            to="/"
          >
            Início
          </Link>
          <Link className={styles.linkCatalogo} to="/watches">
            Catálogo
          </Link>
          <Link className={styles.linkCarrinho} to="/cart">
            Carrinho
          </Link>
        </nav>
      </header>
      <div className={styles.content}>
        <Outlet />
      </div>
      <footer>&copy; Desenvolvido por Diego Alves</footer>
    </main>
  );
}
