import { Component } from "react";
import {UncontrolledCollapse, Button, CardBody, Card} from 'reactstrap'

class CollapseEx extends Component {
    render() {
        return (
            <div>
                <Button color="warning" id="toggle">
                    펼치기/접기
                </Button>
                <UncontrolledCollapse toggler="toggle">{/* toggler는 펼쳤다 접어주는 id가 toggle인 버튼을 가리킨다. */}
                    <Card>
                        <CardBody>
                            REACT!!
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        )
    }
}

export default CollapseEx