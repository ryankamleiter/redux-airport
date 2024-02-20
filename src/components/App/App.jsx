import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AirlinesForm from './AirlinesForm.jsx/AirlinesForm';
import AirlinesList from './AirlinesList.jsx/AirlinesList';

function App() {

  const reduxStore = useSelector(store => store);
  const airlines = useSelector(store => store.airlines);

 

  return (
    <div>
      <h1>Redux Airport</h1>

      <AirlinesForm />
      <AirlinesList />
    </div>
  );
}

export default App;
