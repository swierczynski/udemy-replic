import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import Course from '../Course/Course';
import styles from './Courses.module.scss'

const Courses = () => {

  const {courses} = useContext(StoreContext);

  const allCourses = courses.map(course => <li><Course key={course.id} {...course}/> </li> )

  return ( 
    <section className={styles.courses}>
      <h2 className={styles.title}>Wszystkie kursy</h2>
      <ul className={styles.list}>
      {allCourses}
      </ul>
    </section>
   );
}
 
export default Courses; 