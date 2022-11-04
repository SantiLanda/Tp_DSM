import { combineReducers } from "redux";
//Considerando la reduccion de las URL's pertenecientes a las imagenes
const photosReducer = (state = null, action) => {
    return state;
  };

  export default combineReducers({photos:photosReducer});
