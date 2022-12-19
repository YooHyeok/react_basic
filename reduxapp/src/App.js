import './App.css';
import {createStore} from 'redux' // npm install --save redux
import {Provider} from 'react-redux' // npm install --save react-redux
import Page1 from './Page1'

// state ,reducer, action

// <redux>
// state : 컴포넌트에 공유할 다양한 data의 묶음 -> 일반 변수가 될수도있고 객체 변수가 될수도 있다.
// action : 어떤 타입, 뭘 바꿀것인지를 가지고 있는것
// reducer : 변화를 감지하여 실행코드를 넣는다. state와 action을 가지고온다. state는 이전값, action은 새로운값과 타입을 가지고있다.
// reducer를 호출하는 함수 = dispatcher

let data = '메롱'

function reducerr(statee, actionn) { //state는 고정(공유할데이터) action은 dispatcher()에 담아 넘기는값
  console.log("reducer(state) : ",statee)
  console.log("reducer(action) : ",actionn)
  console.log(actionn.typee)
  console.log(actionn.dataa)
  /* 고정 값이 undefine라면, 초기화 */
  if(statee == undefined) {
    return {
      // data1:'NONE',
      data1:data,
      data2:0
    }
  }
  const newwState = {...statee};
  switch(actionn.type) { //action.type이 String, Int
    case "data1" : newwState.data1 = actionn.dataa; break; //state의 data1 값 변경
    case "data2" : newwState.data2 = actionn.dataa; // state의 data2 값 변경
  }
  return newwState;
}
const storee = createStore(reducerr);
console.log(storee)

function App() {
  return (
    <div className="App">
      <Provider store={storee}>
        <Page1/>
      </Provider>
    </div>
  );
}

export default App;
