import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

/** TODO: Add REDUCERS */
const airlinesList = (state = [], action) => {
    if (action.type === 'AIRLINE_ADD') {
        console.log(`The airline to be added is ${action.payload}`)

        return [...state, action.payload];
    }
    return state;
}

/** TODO: Create store */

const storeInstance = createStore(airlinesList, applyMiddleware(logger));


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);