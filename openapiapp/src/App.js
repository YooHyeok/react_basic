import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import RechartsLineTest from './RechartsLineTest';
import SubwayApi from './SubwayApi';
import PostCodeApp from './PostCodeApp';

function App() {
  return (
    <div className="App">
      <>
        {/* <RechartsLineTest/> */}
        <SubwayApi/>
        <PostCodeApp/>
      </>

    </div>
  );
}

export default App;
