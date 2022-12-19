/* Function형 컴포넌트에서 state 초기화하는법. */

import {useState} from "react"; //useState를 활용해야한다. Component, useState 등

function FuncReactState({reactString}) { //props로 받지 않고 직접 받아오기

    /* useState를 활용하여 각각의 Setter 함수를 생성 및 초기화 */
    // const[StateString, setStateString] = useState(reactString); //변수 객체 속성 : StateString , StateNumber
    // const[StateNumber, setStateNumber] = useState(200); //메소드 이름 : setStateString, setStateNumber
    const[StateCombine, setStateCombine] = useState({StateString:reactString, StateNumber:200}); //메소드 이름 : setStateString, setStateNumber

    return (
        <> {/* 리액트용 프래그먼트태그 */}
        {/* <div>{StateString}{StateNumber}</div> */}
        {/* <button onClick={(e)=> setStateString("리액트")}> 따닥 </button> */} {/* set함수로 초기화 */}
        {/* <button onClick={(e)=> setStateNumber(300)}> 따닥 </button> */}
        <div>{StateCombine.StateString}{StateCombine.StateNumber}</div>
        <button onClick={(e)=> setStateCombine({...StateCombine, StateString:"리액트"})}> 따닥 </button>
        <button onClick={(e)=> setStateCombine({...StateCombine, StateNumber:300})}> 따닥 </button>
        {/* <button onClick={(e) => this.setState({...this.state, StateNumber:300})}> 뻐튼클릭 </button> */}
        {/* <button onClick={function(){
            return this.setState({...this.state, StateNumber:300})
        }.bind(this)}> 뻐튼클릭 </button> */}
        </>
    );
} 
export default FuncReactState