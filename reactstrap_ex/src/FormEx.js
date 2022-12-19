import {Component} from "react";
import {Form, Label, Input, Row, Col, FormGroup} from 'reactstrap';

class FormEx extends Component {
    render() {
        return(
            <Form>
                <Label for="gender">gender</Label>
                <Input type="select" bsSize="sm" id="gender">
                    <option>no select</option>
                    <option>woman</option>
                    <option>man</option>
                </Input>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="address">address</Label>
                            <Input type="text" name="address" id="address"></Input>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="mobile">mobile</Label>
                            <Input type="text" name="mobile" id="mobile"></Input>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="age">age</Label>
                            <Input type="text" name="age" id="age"></Input>
                        </FormGroup>

                    </Col>
                </Row>
            </Form>
        )
    }
}

export default FormEx