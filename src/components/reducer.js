import { combineReducers } from "redux";
  const photosLoadedReducer = (state = null, action) => {
    if (action.type === "PHOTOS") {
      return action.payload;
    }
  
    return state;
  };

  export default combineReducers({ photosLoaded: photosLoadedReducer});