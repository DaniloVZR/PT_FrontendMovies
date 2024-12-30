import Image from "next/image";
import separatorDesktop from "@/../assets/banners/topbar-sharestory-desktop.webp";
import separatorMobile from "@/../assets/banners/topbar-sharestory-mobile.gif";
import styles from "./Separator.module.scss"

const Separator = () => {
  return (
    <div className={styles.separator}>
      <Image
        src={separatorDesktop}
        alt="Separador"
        width={2051}
        height={58}
        className={styles.separatorDesktop}
      />
      <Image
        src={separatorMobile}
        alt="Separador"
        width={769}
        height={71}
        className={styles.separatorMobile}
      />
    </div>
  );
};

export default Separator;