import React, { useContext, useState } from 'react';
import request from '../../../helpers';
import { StoreContext } from '../../../store/StoreProvider';
import CoursePopup from '../CoursePopup/CoursePopup';

const CourseDetails = (props) => {
  const { title, id } = props;

  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const { setCourses } = useContext(StoreContext);

  const showPopup =() =>{
    setIsOpenPopup(true)
  }
  const hidePopup = e => {
    if(e !== undefined) {
    e.preventDefault();
    }
    setIsOpenPopup(false)
  }
  const handleDelete = async () => {
    try {
      const {status} = await request.delete(`/courses/${id}`);

      if(status === 200) {
        setCourses(prevValue => prevValue.filter( course => course.id !== id))
      }
    } catch (error) {
      console.log(error);
    }
  }


  return ( 
    <>
    <details>
      <summary>
        {title}
      </summary>
      <button onClick={showPopup}>Edytuj</button>
      <button onClick={handleDelete}>Usuń</button>
    </details>
    <CoursePopup {...props} hidePopup={hidePopup} isOpenPopup={isOpenPopup} />
    </>
   );
}
 
export default CourseDetails;