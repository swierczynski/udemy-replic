import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.scss'
import ReactDOM from 'react-dom';

const Modal = ({children, isOpen, shouldBeClosedOutsideClick, handleOnClose}) => {

  const modalRef = useRef(null);

  const previousActiveElem = useRef(null);


  useEffect(()=> {
    if(!modalRef.current) return

    const { current: modal } = modalRef;

    if(isOpen) {
      previousActiveElem.current = document.activeElement;
      modal.showModal()
    } else if(previousActiveElem.current) {
      modal.close()
      previousActiveElem.current.focus()
    }
  },[isOpen])

  useEffect(()=> {
    const { current:modal } = modalRef;
    const handleCancel = e => {
      e.preventDefault();
      handleOnClose()
    }
    modal.addEventListener('cancel', handleCancel);

    return () => {
      modal.removeEventListener('cancel', handleCancel);
    }
  }, [handleOnClose])

  const handleOutsideClick = e => {
    const { current } = modalRef;
    if(shouldBeClosedOutsideClick && e.target === current) {
      handleOnClose();
    }
  }

  return ReactDOM.createPortal(( 
    <dialog ref={modalRef} className={styles.modal} onClick={handleOutsideClick}>
      {children}
    </dialog>
   ), document.body);
}

export default Modal

