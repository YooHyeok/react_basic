import {Component} from "react";
import Car from "./Car";
// class Garage extends Component {
//     constructor(props) {
//         super(props);

//     }
//     render() {
//         /* 두줄로 처리하는 코드 */
//         // const carInfo = {name:'ford', model:'raptor'}
//         // return (<Car brand={carInfo} />);
//         return (<Car brand={{name:'Ford', model:'Raptor'}} />);
//     }
// }

function Garage() { // 함수형 컴포넌트는 return 클래스형 컴포넌트는 render(){}함수에서 return.
        return <Car brand={{name:'Ford', model:'Raptor'}} />;
}

export default Garage;