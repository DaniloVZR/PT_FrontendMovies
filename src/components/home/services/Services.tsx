import Image from "next/image";
import styles from "./Services.module.scss";
import { services } from "@/constants";

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.servicesContent}>
        {
          services.map((service) => (
            <div key={service.name}>
              <Image src={service.source} alt={service.name} width={35} height={35} />
              <div className={styles.text}>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Services;