import './App.css';
import WriteBoard from './component/WriteBoard';
import DetailBoard from './component/DetailBoard';
import ListBoard from './component/ListBoard';
import ModifyBoard from './component/ModifyBoard';
import BoardPage from './component/BoardPage';
import DeleteBoard from './component/DeleteBoard';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      {/* <WriteBoard/> */}
      {/* <DetailBoard/> */}
      <Routes>
        {/* <Route exact path='/' element={<ListBoard/>}/> */}
        <Route exact path='/' element={<BoardPage/>}/>
        <Route exact path='/write' element={<WriteBoard/>}/>
        <Route exact path='/detail/:id' element={<DetailBoard/>}/>
        <Route exact path='/modify/:id' element={<ModifyBoard/>}/>
        <Route exact path='/delete/:id' element={<DeleteBoard/>}/>
      </Routes>

    </div>
  );
}

export default App;
