import React, { useContext } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { routes } from '../../routes';
import { StoreContext } from '../../store/StoreProvider';
import AdminPanel from '../AdminPanel/AdminPanel';
import Courses from '../Courses/Courses';
import UserCourses from '../UserCourses/UserCourses';
import styles from './Content.module.scss';


const ADMIN_TYPE = 1

const Content = () => {

  const { user } = useContext(StoreContext);

  const isUserLogged = Boolean(user);
  const isAdminLogged = Boolean(user && user.accessLevel === ADMIN_TYPE) 

  return ( 
    <main className={styles.main}>
      <Switch>
        <Route exact path={routes.courses} render={()=> <Courses />} />
        {isUserLogged && <Route exact path={routes.buyed} render={()=> <UserCourses />} />}
        {isAdminLogged && <Route exact path={routes.manage} render={()=> <AdminPanel />} />}
        <Redirect to={routes.courses} />
      </Switch>
    </main>
   );
}
 
export default Content;