//import the combine reducer function from redux
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import cart from '../reducers/rcart.js'
import categories from '../reducers/rcategories.js'
import products from '../reducers/rmessages.js'
import apiItems from '../reducers/rapi.js'
import {composeWithDevTools} from 'redux-devtools-extension';


//import in function from reducers that will be run through our combineReducer function.

//Combiner
const allReducers = combineReducers({
   categories: categories,
   activeList: products,
   cart: cart,
   apiItems: apiItems
});

export default createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
  );
//create a store variable using the createStore method.  pass in your imported global reducer, as well as the string to use the redux chrome web tool if desired
//once your store is set up, you can use the redux web tool to inspect your store.  
//You will see each state variable used in your reducers, and be able to track their current status and changes.






//import all your separate reducer files

// declare a allreducer var, pass in each individual reducer within an obj.  values using above reducer imports, keys can potato.

//export your default allreducers

//your combined reducers can now be imported into your app's index