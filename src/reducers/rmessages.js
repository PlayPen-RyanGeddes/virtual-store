


// const initialState = {
//   messages: []
// }

// export default function reducer(state=initialState, action){
//   console.log(initialState)

//   const {type, payload} = action;

//   switch(type){
//     case "ADDCART":
//       let name = Object.keys(payload)[0];
//       state.activeList =  {...state.activeList, [name]: {...state.activeList[name], inventory: state.activeList[name].inventory -1}}
//       return state;
//     default:
//       return state;
//   }

// }


//       // // this should spread out the selected item and reduce it by one
//       // let reducedProduct = {...state.activeList[payload.name], ...{inventory: state.activeList[payload.name].inventory -1}}
//       // activeList = {...foodList, lobster:{...foodList.lobster, inventory:400}}

//       // let spreadObj = {};
//       // spreadObj[reducedProduct.name] =  reducedProduct;
//       // let newList = {...state.activeList, ...spreadObj}
//       //....there has to be a cleaner way to do this





// // HINT: Different reducers can respond to the same actions
// // Create an action that will trigger the reducer to reduce the stock counter
// // Create a reducer that reduces the # in stock when that action is dispatched