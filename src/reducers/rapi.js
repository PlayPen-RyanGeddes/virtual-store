

const initialState = [];

export default function reducer(state=initialState, action){
  console.log(initialState)

  const {type, payload} = action;

  switch(type){
    case "GET":
      return payload;
    default:
      return state;
  }

}

