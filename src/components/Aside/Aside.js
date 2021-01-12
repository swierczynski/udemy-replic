import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import AdminMenu from './AdminMenu/AdminMenu';
import styles from './Aside.module.scss'
import UserMenu from './UserMenu/UserMenu';

const ADMIN_TYPE = 1


const Aside = () => {

  const { user } = useContext(StoreContext)

  const adminMenuComponent = user && user.accessLevel === ADMIN_TYPE ? <AdminMenu /> : null

  return ( 
    <section className={styles.aside}>
      <UserMenu isUserLogged={Boolean(user)} />
      {adminMenuComponent}
    </section>
   );
}
 
export default Aside;