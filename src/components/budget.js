import React, { useContext } from 'react';
import App from '../App';
import { AppContext } from '../context/appContext';

export default function Budget() {
  const { budget } = useContext(AppContext);
  return (
    <div className='alert alert-secondary'>
      <span>Budget : {budget} Rs</span>
    </div>
  )
}