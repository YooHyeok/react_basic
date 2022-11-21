import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom'
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          {/* root Path 즉 / 주소는 반드시 있어야한다. 없으면 오류가난다. */}
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='/MakeAccount' element=""/>
          <Route exact path='/deposit' element=""/>
          <Route exact path='/withdraw' element=""/>
          <Route exact path='/transfor' element=""/>
          <Route exact path='/accountInfo' element=""/>
        </Routes>
    </div>
  );
}

export default App;
