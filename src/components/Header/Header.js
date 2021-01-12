import React, { useContext, useState } from 'react';

import styles from './Header.module.scss'
import { StoreContext } from '../../store/StoreProvider';
import logo from '../../assets/icons/logo.jpg'
import LoginForm from '../LoginForm/LoginForm';


const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user, setUser } = useContext(StoreContext);
  const setProperlyLabel = Boolean(user) ? 'Wyloguj się' : 'Zaloguj się';


  const handleOnClose = () => {
    setIsModalOpen(false)
  }
  const handleOnClick = ()=> {
    if(Boolean(user)) {
      setUser(null)
    } else {
      setIsModalOpen(true)
    }
  }
  return ( 
    <header className={styles.main}>
      <img src={logo} alt="udemy logo"/>
      <h1>Super kursy dla programistów</h1>
      <button onClick={handleOnClick}>{setProperlyLabel}</button>
      <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpen} handleOnClick={handleOnClick}/>
    </header>
   );
}
 
export default Header;