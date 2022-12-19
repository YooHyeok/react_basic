/* import React, {Component} from 'react'; //클래스로 컴포넌트화 할때 선언한다. from 
class MyCom extends Component {
    render() { //클래스 형태의 컴포넌트는 render()라는 함수에서 태그를 리턴해줘야한다.
        // Component 클래스에 존재하는 함수로서 상속받아 오버라이딩하여 사용
        return <h2>[ THIS IS IMPORTED COMPONENT ]</h2>
    }
} */
function MyCom() {
    return (
        <h2>[ THIS IS IMPORTED COMPONENT ]</h2>  
    );
}
export default MyCom;