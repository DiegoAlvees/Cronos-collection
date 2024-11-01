import styles from "./home.module.css"
import { Link } from "react-router-dom"
import relogioClassico from "/imagens/citizen-automatico.jpg"
import relogioModerno from "/imagens/tissot-quartzo.webp"
import relogioEsportivo from "/imagens/orient-automatico.webp"


export default function Home() {
    return (
        <main className={styles.homeContainer}>
            <div className={styles.backgroundImage}/>
            
            <section className={styles.featuredSection}>
                <h2>Destaques</h2>
                <div className={styles.featuredContainer}>
                    <div className={styles.featuredItem}>
                        <img src={relogioClassico} alt="Relógio Clássico" />
                        <h3>Relógio Clássico</h3>
                        <p>Elegância atemporal para qualquer ocasião.</p>
                        <Link to={`/watches?category=Clássico`} className={styles.viewButton}>Ver Mais</Link>
                    </div>
                    <div className={styles.featuredItem}>
                        <img src={relogioModerno} alt="Relógio Moderno" />
                        <h3>Relógio Moderno</h3>
                        <p>Design inovador e funcionalidades avançadas.</p>
                        <Link to={`/watches?category=Moderno`} className={styles.viewButton}>Ver Mais</Link>
                    </div>
                    <div className={styles.featuredItem}>
                        <img src={relogioEsportivo} alt="Relógio Esportivo" />
                        <h3>Relógio Esportivo</h3>
                        <p>Perfeito para quem busca performance e estilo.</p>
                        <Link to={`/watches?category=Esportivo`} className={styles.viewButton}>Ver Mais</Link>
                    </div>
                </div>
            </section>
            <section className={styles.testimonialsSection}>
                <h2>O que nossos clientes dizem</h2>
                <div className={styles.testimonialsContainer}>
                    <div className={styles.testimonial}>
                        <p>"Adorei meu novo relógio! A qualidade é excepcional e o design é elegante."</p>
                        <span>- Leticia M.</span>
                    </div>
                    <div className={styles.testimonial}>
                        <p>"Excelente atendimento e entrega rápida. Recomendo a todos!"</p>
                        <span>- Italo L.</span>
                    </div>
                    <div className={styles.testimonial}>
                        <p>"Relógios lindos e duráveis. Vale cada centavo!"</p>
                        <span>- Adenilson A.</span>
                    </div>
                </div>
            </section>
        </main>
    )
} 
