import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import Course from '../Course/Course';
import styles from './UserCourses.module.scss'

const UserCourses = () => {

  const { user, courses } = useContext(StoreContext);

  const buyedCourses = courses.filter(course => user.courses.includes(course.id)).map(course => <li><Course isUserContext={true} key={course.id} {...course} /></li>)

  return ( 
    <section className={styles.courses}>
      <h2 className={styles.title}>Twoje zakupione kursy</h2>
      <ul className={styles.list}>
        {buyedCourses}
      </ul>
    </section>
   );
}
 
export default UserCourses;