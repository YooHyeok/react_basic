import {Component} from 'react';
import {Button, UncontrolledCarousel} from 'reactstrap';
import card1 from '../img/card-1.png';
import card2 from '../img/card-2.png';
import card3 from '../img/card-3.png';
import card4 from '../img/card-4.png';
import card5 from '../img/card-5.png';
const item = [
    {
          src: card1
        , caption: ''
        , altText: ''
        , header: ''
    }
    , {
          src: card2
        , caption: ''
        , altText: ''
        , header: ''
    }
    , {
          src: card3
        , caption: ''
        , altText: ''
        , header: ''
    }
    , {
          src: card4
        , caption: ''
        , altText: ''
        , header: ''
    }
    , {
          src: card5
        , caption: ''
        , altText: ''
        , header: ''
    }
]

class Section7 extends Component {
    render() {
        return(
            <tr>
                <td className={'w-100'} colSpan='2'>
                    <div className='componentBox'>
                        <span className='L-text'>
                            프렌즈 체크카드,<br/>
                            내가 고르는 선택의 즐거움
                        </span>
                        <span className='S-text'>
                            프렌즈 디자인부터 멋스러운 블랙 컬러 카드까지 원하는 디자인과 기능을 선택할 수 있습니다.
                        </span><br/>
                        <Button color='light' size='sm'>카카오뱅크 프렌즈 체크카드</Button>
                        <UncontrolledCarousel items={item}/>
                    </div>
                </td>
            </tr>
        )
    }
}

export default Section7;