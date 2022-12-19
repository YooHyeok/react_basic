import {Component} from "react";
import {Button, ButtonGroup} from "reactstrap";

class ReactstrapBtngrp extends Component {
    constructor(props) {
        super(props);
        this.state={number:10};
    }

    move = (type, e) => {
        if(type=='Left') this.setState({number: this.state.number-1});
        else if(type=='Right') this.setState({number: this.state.number+1});
    }

    render() {
        return (
            <>
                <ButtonGroup style={{padding:'0px'}}>
                    <Button onClick={(e=>this.move('Left'))}>Left</Button>
                    <Button onClick={(e=>this.move('Right'))}>Right</Button>
                </ButtonGroup>
                <br/>
                <h1>{this.state.number}</h1>
                <Button color="primary">blue</Button>
                <Button color="info">teal</Button>
                <Button color="success">green</Button>
                <Button color="warning">yellow</Button>
                <Button color="danger">red</Button>
                <Button color="dark">dark</Button>
                <Button color="secondary">gray</Button>
                <Button color="light">white</Button>
            </>
        );
    }
}
export default ReactstrapBtngrp;