import React, { useContext, useState } from 'react';
import request from '../../../helpers';
import { StoreContext } from '../../../store/StoreProvider';
import Modal from '../../Modal/Modal';
import styles from './CoursePopup.module.scss'

const CoursePopup = ({
  authors =[],
  isEditMode = true,
  hidePopup,
  isOpenPopup,
  id,
  img ='',
  price = 0,
  title = '',
}) => {


  const [formAuthors, setFormAuthors] = useState(authors)
  const [formAuthor, setFormAuthor] = useState('');
  const [formImg, setFormImg] = useState(img);
  const [formPrice, setFormPrice] = useState(price);
  const [formTitle, setFormTitle] = useState(title);

  const { setCourses } = useContext(StoreContext)

  const handleSubmit = async e => {
    e.preventDefault();

    const courseObj = {
      authors : formAuthors,
      id,
      img: formImg,
      price: Number(formPrice),
      title: formTitle
    }

    if(isEditMode) {
      try {
        const { data, status } = await request.put('/courses', courseObj);

        if(status === 202) {
          setCourses(data.courses);
        }

      } catch (error) {
        console.log(error);
      }
    } else {

      try {
        const { data, status } = await request.post('/courses', courseObj);

        if(status === 201) {
          setCourses(data.courses)
        }

      } catch (error) {
        console.log(error);
      }

    }
    hidePopup()
  } 

  const handleAddAuthor = e => {
    e.preventDefault();
    setFormAuthors(prevValue => [...prevValue, formAuthor])
    setFormAuthor('')
  }
  const deleteAuthor = (e) => {
    const authorToDelete = e.target.dataset.author;
    setFormAuthors(prevValue => prevValue.filter(author => author !== authorToDelete))
  }



  const allAuthors = formAuthors.map(author => (
    <li key={author}>
      <p>{author}</p>
      <button onClick={deleteAuthor} data-author={author}>Usuń</button>
    </li>
  ))


  return ( 
    <Modal shouldBeClosedOutsideClick={false} isOpen={isOpenPopup} handleOnClose={hidePopup}>
      <div className={styles.coursePopup}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <label>
              Autor:
              <input type="text" value={formAuthor} onChange={e => setFormAuthor(e.target.value)}/>
              <button onClick={handleAddAuthor}>Dodaj autora</button>
            </label>
          </div>
          <div className={styles.formRow}>
            <label>
              Obrazek URL:
              <input type="text" value={formImg} onChange={e => setFormImg(e.target.value)}/>
            </label>
          </div>
          <div className={styles.formRow}>
            <label>
              Cena:
              <input type="number" value={formPrice} onChange={e => setFormPrice(e.target.value)}/>
            </label>
          </div>
          <div className={styles.formRow}>
            <label>
              Tytuł:
              <input type="text" value={formTitle} onChange={e => setFormTitle(e.target.value)}/>
            </label>
          </div>
          <button type='submit'>{isEditMode ? 'Edytuj kurs' : 'Dodaj kurs'}</button>
          <button onClick={hidePopup}>Anuluj</button>
        </form>
        <ul>
          {allAuthors}
        </ul>
      </div>
    </Modal>
   );
}
 
export default CoursePopup;