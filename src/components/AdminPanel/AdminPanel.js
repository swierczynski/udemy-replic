import React, { useContext, useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import styles from './AdminPanel.module.scss'
import CourseDetails from './CourseDetails/CourseDetails';
import CoursePopup from './CoursePopup/CoursePopup';

const AdminPanel = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const showPopup =() =>{
    setIsOpenPopup(true)
  }
  const hidePopup = (e) => {
    if(e !== undefined) {
      e.preventDefault();
    }
    setIsOpenPopup(false)
  }
  const { courses } = useContext(StoreContext);

  const allCourses = courses.map(course => <CourseDetails key={course.id} {...course} />)

  return ( 
    <section>
      {allCourses}
      <button onClick={showPopup}>Dodaj nowy kurs</button>
      <CoursePopup isOpenPopup={isOpenPopup} hidePopup={hidePopup} isEditMode={false}/>
    </section>
   );
}
 
export default AdminPanel;