import { Component } from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class ModalEx extends Component{
    constructor(props) {
        super(props)
        this.state={modal:false}
    }
    toggle = (e) => {
        this.setState({modal: !this.state.modal})
    }
    render(){
        return(
            <>
                <Button color="warning" onClick={this.toggle}>Modal 버튼</Button>
                <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}> {/* isOpen : true이면 모달 열림. | toggle : 모달 외부 클릭시 모달꺼짐*/}
                    <ModalHeader toggle={this.toggle}>Modal header</ModalHeader>
                    <ModalBody >The generated Lorem Ipsum is therefore always free from repetition.</ModalBody>
                    <ModalFooter >푸터다</ModalFooter>
                </Modal>
            </>
        )
    }
}

export default ModalEx