import {Component} from 'react';

class Reactstate extends Component {
    constructor(props) { //this.state를 초기화하는곳.
        super(props);
        this.state = {  StateString: this.props.reactString
                      , StateNumber:200};
    }

    stateChange = () => {
        this.state.StateNumber = 300;
        this.forceUpdate(); // 위의 코드를 리액트에 강제로 반영해준다.
        // this.setState({...this.state, StateNumber:300})
    }

    render() {
        return(
            <div>
                <div>{this.state.StateString}{this.state.StateNumber}</div>
                {/* <button onClick={(e)=> this.stateChange()}> 따닥 </button> */} {/* 화살표 함수를 사용하면 this를 따로 bind 처리 하지 않아도 된다. */}
                {<button onClick={(e) => this.setState({...this.state, StateString:"리액트"})}> 따닥 </button>}
                {<button onClick={(e) => this.setState({...this.state, StateNumber:300})}> 따닥 </button>}
                {/* <button onClick={function(){
                    return this.setState({...this.state, StateNumber:300})
                }.bind(this)}> 뻐튼클릭 </button> */}
            </div>
        );
    }
}

/* function Reactstate (props) {
    return <div>{this.state.StateString}{this.state.StateNumber}</div>;
} */

export default Reactstate;