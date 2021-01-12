import React from 'react';
import styles from '../Aside.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes';

const UserMenu = ({isUserLogged}) => {
  return ( 
    <>
      <p className={styles.title}>Panel użytkownika</p>
      <nav>
        <ul>
          <li className={styles.link}>
            <Link to={routes.courses}>Kursy w sprzedaży</Link>
          </li>
          {isUserLogged && <li className={styles.link}><Link to='/my-courses'>Moje zakupione kursy</Link></li>}
        </ul>
      </nav>
    </>
   );
}
 
export default UserMenu;