import { Component } from "react";
import { Spinner } from "reactstrap";

class SpinnerEx extends Component {
    render() {
        return(
            <>
                <Spinner color="secondary"/>
                <Spinner color="success"/>
                <Spinner type="grow" color="dark"/>
                <Spinner type="grow" color="infodark"/>
                <Spinner size="sm" color="primary"/>
                <Spinner style={{width:'10em', height:'0.5em'}} color="dark"/>
                <Spinner style={{width:'10em', height:'10em'}} color="secondary"/> {/* em단위는 배수 */}
                <Spinner style={{width:'3em', height:'10em'}} type="grow" color="primary"/> {/* em단위는 배수 */}

            </>
        )
    }
}

export default SpinnerEx