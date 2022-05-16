import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const jsx = (
    <AppRouter />
)


ReactDOM.render( jsx, document.getElementById('root'));

serviceWorkerRegistration.register();