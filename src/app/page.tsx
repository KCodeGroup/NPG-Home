import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Bienvenido a NPG Home
          </h1>
          <p className={styles.subtitle}>
            Encuentra tu hogar ideal en los mejores proyectos inmobiliarios del Caribe colombiano
          </p>
          <div className={styles.ctas}>
            <Link href="/proyectos" className={styles.primary}>
              Ver Proyectos
            </Link>
            <Link href="/contacto" className={styles.secondary}>
              Contáctanos
            </Link>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.feature}>
            <h3>🏡 Proyectos Exclusivos</h3>
            <p>Desarrollos inmobiliarios en las mejores ubicaciones</p>
          </div>
          <div className={styles.feature}>
            <h3>💰 Financiación Flexible</h3>
            <p>Opciones de pago adaptadas a tus necesidades</p>
          </div>
          <div className={styles.feature}>
            <h3>🌟 Calidad Garantizada</h3>
            <p>Construcciones de primera clase con las mejores amenidades</p>
          </div>
        </section>
      </main>
    </div>
  );
}
