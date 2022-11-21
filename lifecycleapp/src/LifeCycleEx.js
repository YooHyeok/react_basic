import React, {Component} from 'react';
/* 생성자, render의 호출순서와 props와 state 활용 */
class LifeCycleEx extends Component {
    // state={};
    /* 살행순서 2 */
   /*  static getDerivedStateFromProps(props,state) {
        console.log("getDerivedStateFromProps");
        console.log(props); //LifeCycle 컴포넌트 태그에 선언된 속성을 Object 형태로 가져온다.
        console.log(props.props_value);
        console.log("state",state); //state는 Constructor로부터 가져온다.
        return {name:props.name, age:props.age}; //state에 반환
    } */
    /* 살행순서 1 */
    constructor(props) { // props : 속성
        super(props);    // 부모생성자 Component생성자 호출
        this.state ={name:props.name, age:props.age};  // getDerivedStateFromProps에서 사용하기 위해 미리 초기화 (생성자를 통해 멤버를 만든것)
        console.log(props);
        console.log("constructor");
    }
    /* 살행순서 4 */
    componentDidMount() { //화면에 다 렌더된 후 마지막에 뿌려주는 애
        console.log("componentDidMount");
        // this.state.name="kang"; //변경되지 않는다.
        this.setState({...this.state, name:"kang"}); //전개식을 사용하여 state 변경 (강제로 한것을 예로 든것이다. 보통은 사용자가 화면에서 입력한 값으로 바꿈)
        //또한 이렇게 변경하면 최상단 함수를 주석처리해야함.... 초기화가 다시진행되므로...
    }
    shouldComponentUpdate(props, state) { // 속성 값이 변경되면 작동하는 함수이다. 
        //(componentDidMount에서 this.setState()를 실행하지 않으면 호출하지않음)
        console.log("shouldComponentUpdate");
        console.log(props);
        return true; //true를 반환할 때 바뀐다.
    }
    /* 살행순서 3 */
    render() {
        console.log("render");
        return <h1>LifeCycle Test : {this.state.name}, {this.state.age}</h1>
    }

}
export default LifeCycleEx;