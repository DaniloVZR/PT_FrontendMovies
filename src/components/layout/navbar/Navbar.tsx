import brand from '../../../../assets/brand/brand.svg';
import brand2 from '../../../../assets/brand/brand-2.svg';
import search from '../../../../assets/nav/search.svg';
import pin from '../../../../assets/nav/pin.svg';
import favorite from '../../../../assets/nav/favorite.svg';
import user from '../../../../assets/nav/user.svg';
import shoppingBag from '../../../../assets/nav/shopping-bag.svg';
import styles from './Navbar.module.scss';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <picture>
          <source media="(min-width: 768px)" srcSet={brand.src} />
          <Image src={brand2} alt="Movies Logo" width={100} height={50} />
        </picture>

        <div className={styles.categories}>
          <ul>
            <li>Mujer</li>
            <li>Hombre</li>
            <li>Nuevo <span>Lanzamientos</span> </li>
            <li>Ofertas <span>De Temporada</span> </li>
            <li>Personajes <span>Licencias</span></li>
          </ul>
        </div>

        <div className={styles.actions}>
          <button><Image src={search} alt="Buscar" width={24} height={24} /></button>
          <button><Image src={pin} alt="Ubicación" width={24} height={24} /></button>
          <button><Image src={favorite} alt="Favoritos" width={24} height={24} /></button>
          <button><Image src={user} alt="Usuario" width={24} height={24} /></button>
          <button><Image src={shoppingBag} alt="Carrito" width={24} height={24} /></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;