import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots } from './reducers';

const store = createStore(searchRobots)

ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>, 
                document.getElementById('root'));


//serviceWorker.unregister();
serviceWorker.register();
