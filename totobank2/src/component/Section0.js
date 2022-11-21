import {Component} from 'react';

class Section0 extends Component {
    render() {
        return(
            <tr>
                {/* react에서는 class를 className 이라고 한다. ({중괄호} 생략 가능) */}
                {/* colSpan='2' --> 두개의 셀을 하나로 합친다. */}
                <td className={"w-100"} colSpan='2'>
                    <div className="intro_main">
                        <h3 className="title_main">
                            이미 모두의 은행<br/> 지금은 토토뱅크
                        </h3>
                        <p className="title_sub1">
                            한 사람, 한 사람을 위해 시작한 은행이 <br/>
                            더 많은 사람들이 찾는 모두의 은행이 되었습니다.
                        </p>
                        <p className="title_sub2">
                            보내고, 받고, 모으고, 쓰는<br/>
                            당신의 모든 일이 바뀌고 있습니다.
                        </p>
                        {/*상대경로 디렉토리 에서 읽어오려면 require("상대경로") 절대경로는 public폴더 하위에 존재해야한다.*/}
                        {/* 속성에 변수나 값 혹은 함수를 사용할때 중괄호로 묶는다. */}
                        <img src={require("../img/main-bg3.png")} width="100%"></img>
                    </div>
                </td>
            </tr>
        )
    }
}
export default Section0;