import {configureStore} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage/session";
import {persistReducer} from "redux-persist";


const persistConfig = {
    key : 'root',
    storage,
};

function reducer(currentState, action) {
    if(currentState == undefined) {
      return (
        { Authorization : '' //토큰
        , UserId:'' //로그인 되었을 때 userId저장
      }
      )
    }
    const newState = {...currentState};
    switch (action.type) {
      case "NEWTOKEN" : newState.Authorization = action.data; break;
      case "USERID" : newState.UserId = action.data;
    }
    return newState;
  }

  const persistedReducer = persistReducer(persistConfig, reducer);

  const  store = configureStore({
    reducer: persistedReducer,
  });

  export default store;