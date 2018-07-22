import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import RootRouter from "./routing/router.js"

const AddStore = () => (
    <Provider store={store}>
        <RootRouter />
    </Provider>
);

ReactDOM.render(<AddStore />, document.getElementById('root'));
registerServiceWorker();
