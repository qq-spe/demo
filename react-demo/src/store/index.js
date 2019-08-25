import { createStore , applyMiddleware, compose } from "redux"
import reducer from "./reducer"
import createSagaMiddleware from "redux-saga"
import mySaga from "./mySaga"


const sagaMiddleware = createSagaMiddleware();
const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;

const enhance = composeEnhance(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhance);

sagaMiddleware.run(mySaga)

export default store