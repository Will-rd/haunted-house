import React, { useState } from 'react';
import Home from './pages/Home';


export default function PageContainer() {
    const [currentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        
      };

    


    return (
        <div  className='' style={{height: '100vh'}}  >
          
          {renderPage()}


        </div>
      );



}


