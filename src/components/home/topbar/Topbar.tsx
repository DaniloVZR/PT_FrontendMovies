import Image from 'next/image';
import bannerDesktop from '../../../../assets/banners/topbar-grinch-desktop.webp';
import bannerMobile from '../../../../assets/banners/topbar-grinch-mobile.gif';
import styles from './Topbar.module.scss';

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <Image
        src={bannerMobile}
        width="100"
        height="50"
        alt="Grinch banner"
        className={styles.bannerMobile}
      />
      <Image
        src={bannerDesktop}
        alt='banner'
        width={2051}
        height={58}
        className={styles.bannerDesktop}
      />
    </div>
  );
};

export default Topbar;