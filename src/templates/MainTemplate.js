import React from 'react';
import StoreProvider from '../store/StoreProvider';
import { HashRouter as Router  } from 'react-router-dom'

const MainTemplate = ({children}) => {
  return ( 
    <Router>
      <StoreProvider>
        {children}
      </StoreProvider>
    </Router>
   );
}
 
export default MainTemplate;