import styles from "./Newsletter.module.scss";
import iconEmailWhite from "../../../../assets/contact/icon-email-white.svg";
import Image from "next/image";

const Newsletter = () => {
  return (
    <section>
      <div className={styles.newsletterContent}>
        <div className={styles.verticalText}>
          <p>MVS</p>
          <p>20% OFF</p>
        </div>
        <div className={styles.newsletterMain}>
          <h1>suscríbete a nuestro <br /> newsletter y <span>recibe 20% OFF <br /> en tu primera compra</span></h1>
        </div>
        <div className={styles.suscription}>
          <p>Todas las novedades, lanzamientos, descuentos exclusivos y mucho más.</p>
          <div className={styles.suscriptionButton}>
            <Image src={iconEmailWhite} alt="Email" />
            <p>suscribirme</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;