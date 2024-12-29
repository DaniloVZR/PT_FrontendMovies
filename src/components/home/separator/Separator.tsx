import Image from "next/image";
import separatorImage from "@/../assets/banners/topbar-sharestory-desktop.webp";
import styles from "./Separator.module.scss"

const Separator = () => {
  return (
    <div className={styles.separator}>
      <Image src={separatorImage} alt="Separador" />
    </div>
  );
};

export default Separator;