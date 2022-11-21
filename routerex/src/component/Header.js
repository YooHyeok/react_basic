import { Component } from "react";
import { Link } from "react-router-dom";

/* link태그의 to속성 경로와 route에 선언된 경로를 매핑해 연결해준다. */
class Header extends Component {
    constructor(props) {
        super(props);
        this.ulStyle ={
              listStyle:'none'
            , margin:'0 auto'
        }
    }
    render() {
        return(
            <div>
                <ul style={this.ulStyle}>
                    <li>
                        <Link to={'/'}>나의 컴포넌트1</Link>
                    </li>
                    <li>
                        <Link to={'/mycom2'}>나의 컴포넌트2</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;