
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from "./../reducers/index";
import { loadState, saveState } from './../localstorage';

const persistence = loadState();

const store = createStore(
    allReducers,
    persistence,
    compose(applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // this is helpful in dev environment but in production remove this otherwise you'll get apply undefined error https://stackoverflow.com/questions/53514758/redux-typeerror-cannot-read-property-apply-of-undefined
  )
)


  store.subscribe(() => {
    saveState(store.getState())
  });
  
  export default store;
