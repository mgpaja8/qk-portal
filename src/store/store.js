import { applyMiddleware, createStore} from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(createLogger())(createStore);

export default createStoreWithMiddleware(rootReducer);
