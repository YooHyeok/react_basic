import { Component } from "react";
import { Alert, UncontrolledAlert } from 'reactstrap';

class ReactstrapAlert extends Component {
    render() {
        return (
            <>
                <Alert color = "danger"> 
                    Simple Alert [color : primary]
                </Alert>
                <UncontrolledAlert color = "warning">
                    UncontrolledAlert Alert [color : warning]
                </UncontrolledAlert>
            </>
        );
    }
}
export default ReactstrapAlert;