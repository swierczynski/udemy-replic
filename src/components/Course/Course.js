import React, { useContext } from 'react';
import request from '../../helpers';
import { StoreContext } from '../../store/StoreProvider';
import styles from './Course.module.scss'
import { useHistory } from 'react-router-dom';
import { routes } from '../../routes'

const Course = (props) => {
  const {authors, img, price, title, isUserContext, id} = props;

  const { user, setUser } = useContext(StoreContext);

  const isUserLogged = Boolean(user)

  const history = useHistory();

  const handleOnClick = async () => {
    try {
      const { data, status } = await request.patch(
        '/users',
        {
          login: user.login,
          courseId: id,
        }
      );

      if(status === 202) {
        setUser(data.user)
        history.push(routes.buyed)
      }


    } catch (err){
      console.log(err);
    }
  } 

  const displayBuyBtn = Boolean(isUserLogged && !isUserContext)

  const allAuthors = authors.join(', ')
  return ( 
    <article className={styles.courseCard}>
      <h3 className={styles.title}>{title}</h3>
      <img className={styles.image} src={img} alt={title} />
      <p className={styles.price}>{`Kosz kursu: ${price} zł `}</p>
      <p className={styles.authors}>{`Autorzy kursu: ${allAuthors}`}</p>
      {displayBuyBtn && <button onClick={handleOnClick}>Zakup ten kurs</button>}
    </article>
   );
}
 
export default Course;