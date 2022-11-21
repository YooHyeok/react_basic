import {Component} from 'react';
import {Button, Badge} from 'reactstrap';

class Section3 extends Component {
    render(){
        return(
            <tr>
                {/* 특정 변수의값이나 함수를호출할때 className={} 중괄호로 받는다. (상수값도 받을 수 있다.) */}
                <td className={"w-50"}>
                    <div className="imgBox">
                        <img src={require('../img/main-moim.png')} width='550px' height='750px' alt=''/>
                        
                        
                    
                    </div>
                </td>
                {/* w-70 w-30 => 7:3 가로 차지 비율 */}
                <td className={"w-50"}>
                    <div className="textBox">
                        <span className='L-text'>
                            함께 쓰고 같이 보는 <br/>
                            <Badge color="warning">B</Badge>
                            모임통장
                        </span><br/>
                        <span className='S-text'>
                            카카오톡 친구를 바로 모임통장으로 초대하고<br/>
                            친구들과 함께 잔액과 입출금 현황을 확인할 수 있습니다.<br/>
                            재미있는 메시지 카드로 회비 입금 요청도 해보세요.
                        </span><br/><br/>
                        <Button color='light' size='sm'>모임통장&gt;</Button>
                    </div>
                </td>
            </tr>
        );
    }
}
export default Section3;