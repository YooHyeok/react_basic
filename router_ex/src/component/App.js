import logo from '../logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import MyCom1 from './MyCom1';
import MyCom2 from './MyCom2';

/* route와 link  */
function App() {
  return (
    <div className="App">
      <Header/>
      {/*routes안에 여러개의 route를 넣을 수 있다. */} 
      <Routes> 
        {/*routes: url에따른 컴포넌트를 매칭시켜주는 역할을 한다. 하나의 라우트 url에따라 어떤 컴포넌트를 보여줄것인가.*/}
        <Route exact path='/' element={<MyCom1/>} />
        <Route exact path='/mycom2' element={<MyCom2/>} />

      </Routes>
    </div>
  );
}

export default App;
