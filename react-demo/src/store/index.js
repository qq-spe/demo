import { createStore, applyMiddleware , compose} from "redux"
import store from "./reducer"
import createSagaMiddleware from "redux-saga"
import mySaga from "./mySaga"

const sagaMiddleware = createSagaMiddleware();

const ComposeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__():compose;

const enhance = ComposeEnhance(applyMiddleware(sagaMiddleware));


const store = createStore(reducer , enhance);

sagaMiddleware.run(mySaga)

export default store;

