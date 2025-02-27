import React, { useContext } from 'react';
import { AppContext } from '../context/appContext';

export default function Remaining() {
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + parseInt(item.cost))
  }, 0);

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success'
  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining : {budget - totalExpenses} Rs</span>
    </div>
  )
}