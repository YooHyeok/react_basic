import {Component} from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class ReactstrapDrop extends Component {
    constructor(props) {
        super(props);
        this.state={dropdownOpen : false}
    }

    toggle = (e) => {
        this.setState({dropdownOpen : !this.state.dropdownOpen}) //원래 state값을 ! 뒤집는다 false=true true=false 토글기능
    }

    render() {
        return(
        <>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>버튼 Dropdown</DropdownToggle> {/* caret은 아래화살표 */}
                <DropdownMenu>
                    <DropdownItem header>헤더</DropdownItem>
                    <DropdownItem disabled>비활성화 버튼</DropdownItem>
                    <a href="https://naver.com">
                        <DropdownItem>네이버 사이트로 이동</DropdownItem>
                    </a>
                    <DropdownItem onClick={e=>alert("Alert 버튼")}>Alert 버튼</DropdownItem>
                </DropdownMenu> 
            </ButtonDropdown>
        </>
        );
    }

}
export default ReactstrapDrop

