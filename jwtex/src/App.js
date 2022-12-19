import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist'//npm install --save redux-persist
import {PersistGate} from 'redux-persist/integration/react' //npm install --save @reduxjs/toolkit
import Header from './Header';
import Login from './Login';
import User from './User';
import store from './persist-store';


/*리덕스 store */
// const store = createStore(reducer);
// function reducer(currentState, action) {
//   if(currentState == undefined) {
//     return (
//       { Authorization : '' //토큰
//       , UserId:'' //로그인 되었을 때 userId저장
//     }
//     )
//   }
//   const newState = {...currentState};
//   switch (action.type) {
//     case "NEWTOKEN" : newState.Authorization = action.data; break;
//     case "USERID" : newState.UserId = action.data;
//   }
//   return newState;
// }

//redux persist에서 제공하는 store - sessionStorage를 사용하고 있다.
let persistor = persistStore(store);

export default function App() {
  return (
    <div className="App">
      <Provider store={store}> {/* redux props */}
        <PersistGate persistor = {persistor}>
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route exact path="/" element={<Login/>} />
              <Route exact path="/user" element={<User/>} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}