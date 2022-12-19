import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'; //부트스트랩 css를 임포트해줘야한다.
import ReactstrapAlert from "./ReactstrapAlert"
import ReactstrapBadge from "./ReactstrapBadge"
import ReactstrapDrop from "./ReactstrapDrop"
import ReactstrapBtngrp from "./ReactstrapBtngrp"
import ReactstrapCard from "./ReactstrapCard"


/*
[부트스트랩! 리액트스트랩!]
리액트에서 부트스트랩을 사용하려면 두가지 npm을 설치해야한다.

npm install -save reactstrap
npm install -s bootstrap

save옵션은 노드 모듈로만 들어가는게 아니라 package.json에까지 반영되게하게끔....하기위해...
그냥 설치하면 나중에 폴더이동했을때 적용이 안될수도 있다!
 */

function App() {
  return (
    <>
      <h1>React Strap Test</h1>
      <ReactstrapAlert/><br/><hr/> {/* Alert, UncontrolledAlert */}
      <ReactstrapBadge/><br/><hr/> {/* Badge, Button */}
      <ReactstrapDrop/><br/><hr/> {/* ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem */}
      <ReactstrapBtngrp/><br/><hr/> {/* Button, ButtonGroup */}
      <ReactstrapCard/><br/><hr/> {/* Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button */}
    </>
  );
}

export default App;
