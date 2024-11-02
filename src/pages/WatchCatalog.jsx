import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import styles from "./watchCatalog.module.css";
import { useSearchParams } from "react-router-dom";

export default function WatchCatalog() {
  const [watches, setWatches] = useState([]);
  const [filteredWatches, setFilteredWatches] = useState([]);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useContext(CartContext);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const response = await fetch("/watches.json");
        const data = await response.json();
        setWatches(data);
        setFilteredWatches(data);

        const uniqueCategories = [
          "Coleção completa",
          ...new Set(data.map((watch) => watch.category)),
        ];
        setCategories(uniqueCategories);

        const categoryFromUrl = searchParams.get("category");
        if (categoryFromUrl && uniqueCategories.includes(categoryFromUrl)) {
          setSelectedCategory(categoryFromUrl);
          const filtered = data.filter(
            (watch) => watch.category === categoryFromUrl
          );
          setFilteredWatches(filtered);
        }
      } catch {
        setError("Erro ao carregar produtos");
      }
    };

    fetchWatches();
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "Coleção completa") {
      setFilteredWatches(watches);
    } else {
      const filtered = watches.filter((watch) => watch.category === category);
      setFilteredWatches(filtered);
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Coleção de relógios</h2>

      <div className={styles.filters}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.filterButton} ${
              selectedCategory === category ? styles.active : ""
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.container}>
        {filteredWatches.map((watch) => (
          <section className={styles.catalogo} key={watch.id}>
            <div>
              <img
                className={styles.imageWatch}
                src={watch.image}
                alt={watch.name}
              />
            </div>
            <div className={styles.specification}>
              <h3>{watch.name}</h3>
              <p>{watch.description}</p>
              <p>
                <strong>Mecanismo:</strong> {watch.mechanism}
              </p>
              <p>
                {watch.value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <p>Estoque: {watch.stock}</p>
            </div>
            <div className={styles.divButton}>
              <button
                className={styles.buttonAddToCart}
                onClick={() => addToCart(watch)}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
