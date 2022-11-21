import {Component} from 'react';
import {Link} from 'react-router-dom';

/* 컴포넌트로 연결될 링크 미리 만들기! */
class Header extends Component {
    render() {
        return (
            <div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <Link to={"/"} id="logo">toto<b>bank</b></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/MakeAccount"}>계좌개설</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/deposit"}>입금</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/withdraw"}>출금</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/transfor"}>계좌이체</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/accountInfo"}>계좌조회</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;