import {Component} from 'react';
import {ListGroup, ListGroupItem, Badge} from 'reactstrap';

class ListGroupEx extends Component {
    render(){
        return(
            <ListGroup>
                <ListGroupItem color="danger" className="justify-content-between">
                    Badge
                    <Badge pill>react</Badge>    
                </ListGroupItem>
                <ListGroupItem disabled tag="a" href="#">Disabled</ListGroupItem>
                <ListGroupItem tag="a" href="https://naver.com">Link</ListGroupItem>
                <ListGroupItem tag="button" action onClick={e=>alert("button")}>Button</ListGroupItem> {/* action속성은 form태그의 전송 url이다. submit 기능시 활용 */}
            </ListGroup>
        )
    }
}

export default ListGroupEx