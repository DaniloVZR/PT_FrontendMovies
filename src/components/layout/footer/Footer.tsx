import Image from "next/image";
import iconCall from "../../../../assets/contact/icon-call.svg";
import iconChat from "../../../../assets/contact/icon-chat.svg";
import iconEmail from "../../../../assets/contact/icon-email.svg";
import iconLocator from "../../../../assets/contact/icon-locator-footer.svg";
import { footerIcons, payment, policies, socialMediaIcons } from "@/constants";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Contacto</h4>
          <div>
            <Image
              src={iconChat}
              width={20}
              height={20}
              alt="Icono Chat"
            />
            <p>Chat con un asesor whatsapp</p>
          </div>
          <div>
            <Image
              src={iconCall}
              width={20}
              height={20}
              alt="Icono Llamada"
            />
            <p>Llamar +57 300 910 8311</p>
          </div>
          <div>
            <Image
              src={iconEmail}
              width={20}
              height={20}
              alt="Icono Email"
            />
            <p>Escribir un correo</p>
          </div>
          <div>
            <Image
              src={iconLocator}
              width={20}
              height={20}
              alt="Icono localización"
            />
            <p className={styles.location}>Localizador de tiendas</p>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4>Ayuda</h4>
          <ul>
            <li>Preguntas frecuentes</li>
            <li>Mis pedidos</li>
            <li>Sigue tu pedido</li>
            <li>Cambios y devoluciones</li>
            <li>Garantía de productos</li>
            <li>Retracto de compra</li>
            <li>Modificar mi suscripción</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Empresa</h4>
          <ul>
            <li>Quiénes somos</li>
            <li>Localizador de tiendas</li>
            <li>Trabaja con nosotros</li>
            <li>Línea de transparencia y ética empresarial</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Medios de pago</h4>
          <div className={styles.gridPayment}>
            {payment.map((pay) => (
              <Image
                key={pay.name}
                src={pay.source}
                width={40}
                height={40}
                alt={pay.name}
                style={{ objectFit: 'contain' }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.socialMedia}>
        <div>
          {socialMediaIcons.map((icon) => (
            <a key={icon.name} href={icon.link} target="_blank">
              <Image src={icon.source} alt={icon.name} />
            </a>
          ))}
          <p>SIGUENOS</p>
        </div>
        <div>
          <Image src={footerIcons[1].source} alt={footerIcons[1].name} />
          <span>
            Colombia
          </span>
        </div>
      </div>

      <div className={styles.policies}>
        <div>
          {policies.map((police) => (
            <p key={police}>
              {police}
            </p>
          ))}
          <Image src={footerIcons[0].source} alt={footerIcons[0].name} height={10} width={100} />
        </div>

        <span>
          ©{new Date().getFullYear()} MIC. Todos los derechos reservados.
        </span>
      </div>

      <div className={styles.copyright}>
        <p>Movies© 2022 ESTRATEGIA COMERCIAL DE COLOMBIA S.A.S NIT: 830507952-5 Dirección: Calle 60 Sur N° 43A 97 Sabaneta, Colombia</p>
      </div>
    </footer>
  );
};

export default Footer;