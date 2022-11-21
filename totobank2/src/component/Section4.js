import {Component} from 'react';
import {Button} from 'reactstrap';

class Section4 extends Component {
    render(){
        return(
            <tr>
                <td className={"w-50"}>
                    <div className="textBox" style={{paddingLeft:'300px'}}>
                        <span className='L-text'>
                            함께 도전해서<br/>
                            재미있는 26주적금
                        </span>
                        <span className='S-text'>
                            26주동안 변화하는 재미에 빠져있는 사이<br/>
                            어느덧 만기 달성 경험을 맛보게 됩니다.
                        </span><br/>
                        <Button color='light' size='sm'>26주적금&gt;</Button>
                    </div>
                </td>
                <td className={"w-50"}>
                    <div className="imgBox">
                        <img src={require('../img/main-26weeks.png')} width='500px' height='400px' alt=''/>
                    </div>
                </td>
            </tr>
        );
    }
}
export default Section4;