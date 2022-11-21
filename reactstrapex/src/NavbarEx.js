import {Component} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

class NavbarEx extends Component{
    constructor(props) {
        super(props);
        this.state={collapsed:false}
    }
    /* 클래스 안에 있기 때문에 객체 안에 들어있으므로 var 등의 scope를 지정하지 않는다. */
    toggle = (e) => {
        this.setState({collapsed:!this.state.collapsed}) /* 형태 {collansed : } 객체형태 */
    }
    render() {
        return(
            <>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">Navbar</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className="mr-2"/>
                    <Collapse isOpen={this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="#">react</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="http://naver.com">start</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </>
        )
    }
}
export default NavbarEx