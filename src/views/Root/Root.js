import React from 'react';
import Aside from '../../components/Aside/Aside';
import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';
import MainTemplate from '../../templates/MainTemplate';
import styles from './Root.module.scss'


const Root = () => {
  return ( 
    <div>
      <MainTemplate>
      <Header />
      <div className={styles.aside}>
        <Aside />
      </div>
      <div className={styles.content}>
        <Content />
      </div>
      </MainTemplate>
    </div>
   );
}
 
export default Root;