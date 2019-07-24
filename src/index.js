import React from 'react';
import {render} from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

//引入路由模式
import {HashRouter} from 'react-router-dom';

//引入react-redux
// import {Provider} from 'react-redux';
// import store from './store';
render(
    // <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>,
    // </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
