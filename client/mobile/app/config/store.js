import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import reducers from '../reducers';

const middleware = [reduxThunk];

if (process.env.NODE_ENV === 'development') {
	middleware.push(logger);
}

export default createStore(reducers, applyMiddleware(...middleware));
