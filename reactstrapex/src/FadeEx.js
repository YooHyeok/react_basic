import { Component } from "react";
import {Button, Fade} from 'reactstrap';

class FadeEx extends Component {
    constructor(props){
        super(props);
        this.state = {fadeInOut : true};
    }
    toggle = (e) => {
        this.setState({fadeInOut : !this.state.fadeInOut})
    }

    render() {
        return(
            <>
                <Button color="success" onClick={this.toggle}>Fade In/Out</Button>
                <Fade in={this.state.fadeInOut} tag="p"> {/* tag속성에 설정한 태그로 Fade태그 하위의 노드를 감싸서 새로 생성. */}
                    <p>Lorep ipsum dolor sit amet, consectetur adiposcing elit </p>
                </Fade>
            </>
        )
    }
}

export default FadeEx;