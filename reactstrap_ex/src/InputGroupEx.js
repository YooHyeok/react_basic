import { CElement, Component } from "react";
import {InputGroup, InputGroupAddon, InputGroupText, Input, Button} from 'reactstrap';

/**
 * reactstrap 9.0이상 버전 Deprecated
 */
class InputGroupEx extends Component {
    render(){
        return(
            <>
                <InputGroup>
                    <Input placeholder="userid"/>
                    <InputGroupAddon addonType="append">
                        <InputGroupText>@reactmail.com</InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <Button>버튼</Button>
                        <Input/>
                    </InputGroupAddon>
                </InputGroup>
            </>
        )

    }
}
export default InputGroupEx;