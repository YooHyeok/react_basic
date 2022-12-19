import logo from './logo.svg';
import './App.css';
import Reactstate from './Reactstate';
import FuncReactState from './FuncReactState';

function App() {
  return (
    <div>
      <h1>React State Test</h1>
      리액트 입니다.<Reactstate reactString={"react"}/><br/>
      펑션리액트 입니다.<FuncReactState reactString={"react"}/>
    </div>
  );
}

export default App;
