'use client'
import brand from '../../../../assets/brand/brand.svg';
import menu from '../../../../assets/nav/hamburguer.svg';
import search from '../../../../assets/nav/search.svg';
import user from '../../../../assets/nav/user.svg';
import shoppingBag from '../../../../assets/nav/shopping-bag.svg';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import { navIcons } from '@/constants';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>

        {/* Menu Mobile*/}
        <div className={styles.menuToggle}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image src={menu} alt='menu' width={20} height={20} />
          </button>

          <button>
            <Image src={search} alt='search' width={20} height={20} />
          </button>
        </div>

        {/* Logo */}
        <Image src={brand} alt="Movies Logo" width={100} height={80} />

        {/* Menu Mobile*/}
        <div className={styles.menuToggle}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image src={user} alt='user' width={20} height={20} />
          </button>

          <button>
            <Image src={shoppingBag} alt='shoppingBag' width={20} height={20} />
          </button>
        </div>


        {/* Categorías */}
        <div className={`${styles.categories} ${isMenuOpen ? styles.showMenu : ''}`}>
          <ul>
            <li>Mujer</li>
            <li>Hombre</li>
            <li>Nuevo <span>Lanzamientos</span></li>
            <li>Ofertas <span>De Temporada</span></li>
            <li>Personajes <span>Licencias</span></li>
          </ul>
        </div>

        {/* Íconos */}
        <div className={styles.actions}>
          {navIcons.map((icon) => (
            <button key={icon.name}>
              <Image src={icon.source} alt={icon.name} width={24} height={24} />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
