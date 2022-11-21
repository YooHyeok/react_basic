import { Component } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

class TabEx extends Component {
    constructor(props) {
        super(props);
        this.state = {tabState:'React'}
    }
    toggle=(tabnum)=>{
        if(this.state.tabState !== tabnum) {
            this.setState({tabState:tabnum});
        }
    }
    render() {
        return (
            <>
                <Nav tabs>
                    <NavItem>
                        <NavLink onClick={()=>{this.toggle("React");}}>
                            First Tab
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={()=>{this.toggle("Start");}}>
                            Second Tab
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.tabState}>
                    <TabPane tabId="React"><h3>React</h3></TabPane>
                    <TabPane tabId="Start"><h3>Start</h3></TabPane>
                </TabContent>
                {/* NavLink 클릭시 toggle을 통해 tabState값 변경 
                    tabContent의 activeTab 속성의 값이 TabPane의 tabId속성과 일치하는 TabPane 태그에 active속성이 추가되어 작동.*/}
                
            </>
        )
    }
}
export default TabEx;