import React from 'react';
import Grafico from './components/grafico';
import Navbar from './components/navbar';

export default function App() {
  return(
    <div>
      <Navbar />
      <div className='px-4'>
      <div style={{width: '80%'}}>
        <Grafico />
      </div>
      </div>
      
    </div>
  );
  }
