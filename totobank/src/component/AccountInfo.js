import {Component} from 'react';
import {Form, Label, Input, Button, Col, FormGroup
    , Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
class AccountInfo extends Component {
    constructor(props) {
        super(props)
        this.divStyle = {
              width: '480px'
            , height: '280px'
            , textAlign: 'left'
            , margin: '100px auto'
            , border: '2px solid gray'
            , padding: '30px'
            , borderRadius: '20px'
        };
        this.state ={

        }
    }

    

    render() {
        return(
            <div style={this.divStyle}>
                <Form>
                    <FormGroup row>
                        <Label for="id" sm={4}>계 좌  번 호</Label>
                        <Col sm={4}>
                            <Input type="text" name="id" id="id"/>
                        </Col>
                        <Col sm={4}>
                            <Button color='primary' style={{width:'100%'}} >계좌조회</Button>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                            <Label for='name' sm={4}>이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름</Label>
                            <Col sm={8}>
                                <Input type='text' name='name' id='name' />
                            </Col>
                    </FormGroup>
                    <FormGroup row>
                            <Label for='balance' sm={4}>잔&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;액</Label>
                            <Col sm={8}>
                                <Input type='text' name='balance' id='balance' />
                            </Col>
                    </FormGroup>
                    <FormGroup row>
                            <Label for='grade' sm={4}>등&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;급</Label>
                            <Col sm={8}>
                                <Input type='text' name='grade' id='grade' />
                            </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default AccountInfo;