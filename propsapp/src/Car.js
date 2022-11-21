import {Component} from 'react';

/* class Car extends Component {
    constructor(props) { //Constructor가 없어도 props를 가져올 쑤 있다. 나만의 state를 쓸때 선언해준다.
        super(props);

    }
    render() {
        console.log(this.props)
        return <div>
                    <h1>I am a {this.props.brand.name}</h1>
                    <h1>부릉부릉 {this.props.brand.model} </h1>
                </div> ; //brand는 Garage의 Render에서 선언된 컴포넌트 태그로부터 props를 읽어들여 가져온다.
    }
} */

// function Car(props) { {/* 함수형 컴포넌트는 매개변수로 props를 받아온다. */}
//     console.log(props)
//     return (<div> {/* 두줄을 출력할 때는 하나의 태그로 묶어준다.. */}
//         <h1>I am a {props.brand.name}</h1> 
//         <h1>부릉부릉 {props.brand.model} 짱</h1>
//         </div>);
// }
function Car({brand}) { {/* 함수형 컴포넌트는 매개변수로 props를 받아온다. */}
    return (<div> {/* 두줄을 출력할 때는 하나의 태그로 묶어준다.. */}
        <h1>I am a {brand.name}</h1> 
        <h1>부릉부릉 {brand.model} 짱</h1>
        </div>);
}
export default Car;