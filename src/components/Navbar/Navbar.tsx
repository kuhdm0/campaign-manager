import React from "react";
import styles from './styles.module.scss';
import menuImage from '../../images/menu.png'

const Navbar: React.FC = () => {  
  return (
    <div className={styles.navbar}>
      <img alt="menu" src={menuImage} className={styles.menuIcon} />
      <div className={styles.navbarText}>Kampagnenmanager</div>
    </div>
  );
};

export default Navbar;
