import {Component} from 'react';
import {Button} from 'reactstrap';

class Section2 extends Component {
    render(){
        return(
            <tr>
                {/* 특정 변수의값이나 함수를호출할때 className={} 중괄호로 받는다. (상수값도 받을 수 있다.) */}
                <td className={"w-70"}>
                    <div className="textBox" style={{paddingLeft:'300px'}}>
                        <span className='L-text'>
                            우대조건 없이 <br/>
                            합리적인 예금과 적금
                        </span><br/>
                        <span className='S-text'>
                        기대했던 금리와 다르게 복잡한 우대조건에 실망한 적이 있었나요?<br/>
                        카카오뱅크의 예금, 적금은 숨겨진 우대조건 없이 누구에게나 편리하고 합리적입니다.
                        </span><br/>
                    
                        <Button color='light' size='sm'>정기예금&gt;</Button> &nbsp;
                        <Button color='light' size='sm'>자유적금&gt;</Button><br/><br/>
                        <img src={require('../img/main-savings-money.png')} width='522px' height='124px' alt=''/>
                    </div>
                </td>
                {/* w-70 w-30 => 7:3 가로 차지 비율 */}
                <td className={"w-30"}>
                    <div className="imgBox">
                        <img src={require('../img/main-savings.png')} width='550px' height='850px' alt=''/>
                    </div>
                </td>
            </tr>
        );
    }
}
export default Section2;