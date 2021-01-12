import React, { useContext, useEffect, useState } from 'react';
import request from '../../helpers';
import { StoreContext } from '../../store/StoreProvider';
import Modal from '../Modal/Modal';
import styles from './LoginForm.module.scss';

const LoginForm = ({handleOnClose, isModalOpen}) => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [validateMessage, setvalidateMessage] = useState('');

  const { setUser } = useContext(StoreContext);

  const validateMessageComponent = validateMessage.length > 0 ? <p className={styles.validateMessageTxt}>{validateMessage}</p> : null;

  const resetState = () => {
    setLogin('');
    setPassword('');
    setvalidateMessage('')
  }

  const handlCloseModal = e => {
    e.preventDefault();

    handleOnClose()
  }
  useEffect(()=> {
    if(isModalOpen){
    resetState()
    }
  },[isModalOpen])

  const handleOnSubmit = async e => {
    e.preventDefault();
    const {data, status} = await request.post(
      '/users',
        {
          login,
          password
        }
      )

      if(status == 200) {
        setUser(data.user);
        resetState();
        handleOnClose()
      } else {
        setvalidateMessage(data.message)
      }
  }


  return ( 
    <Modal shouldBeClosedOutsideClick={true} isOpen={isModalOpen} handleOnClose={handleOnClose}>
      {validateMessageComponent}
      <form className={styles.loginForm} onSubmit={handleOnSubmit}>
        <div className={styles.row}>
          <label> Login:
            <input type="text" value={login} onChange={e => setLogin(e.target.value)} />
          </label>
        </div>
        <div className={styles.row}>
          <label> Hasło:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
        </div>
        <button type='submit'>Zaloguj</button>
        <button type='button' onClick={handlCloseModal}>Anuluj</button>
      </form>
    </Modal>
   );
}
 
export default LoginForm;