import logo from './logo.svg';
import './App.css';
import MyCom from './MyCom';

function App() {
  return (
    <div className="App">
        <div>
          <h1>Start World!</h1>
          <p>HTML 적용하기</p>
          <MyCom/>
        </div>
    </div>
  );
}

export default App; //외부에 Export 시키겠다. -> index.js에서 import App from './App'; 선언을 통해 읽어들어온다.
