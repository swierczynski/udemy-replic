import React from 'react';
import styles from '../Aside.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes'

const AdminMenu = () => {
  return ( 
    <>
      <p className={styles.title}>Panel admina</p>
      <nav>
        <ul>
          <li className={styles.link}>
            <Link to={routes.manage}>Zarządzanie kursami</Link>
          </li>
        </ul>
      </nav>
    </>
   );
}
 
export default AdminMenu;