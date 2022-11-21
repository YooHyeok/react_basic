/* npm install -s sweetalert2 */

import { Component } from "react";
import  Swal  from "sweetalert2";

class SweetAlert2Basic extends Component {
    componentDidMount() {
        Swal.fire('1. SweetAlert').then(
            result=>{
                alert('2. result.value: '+result.value) // ok버튼을 누르면 result객체의 value속성에 true 값이 담긴다.
            }
        );
    }
    render(){
        return (
            <h1>sweetAlert2 test</h1>
        )
    }
}
export default SweetAlert2Basic;