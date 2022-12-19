import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import SetCookie from './SetCookie';
import GetCookie from './GetCookie';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SetCookie/>}/>
        <Route exact path="/cookie" element={<GetCookie/>}/>
      </Routes>
    </div>
  );
}

export default App;
