import { Component } from "react";
import  Swal  from "sweetalert2";

/**
 * SweetAlert 알림창 속성 설정
 */
class SweetAlert2PositionEx extends Component { 
    saveAlert = (flag, positionflag, e) => {
        Swal.fire({
              position : positionflag
            , icon : 'success'
            , title : flag + '되었습니다.'
            , showConfirmButton : false
            , timer : 1500
        })
    }

    render() {
        return(
            <>
                <h1>sweetalert2</h1>
                <button onClick={e=>this.saveAlert('저장','center')}>저장</button>
                <button onClick={e=>this.saveAlert('수정','bottom-end')}>수정</button>
            </>
        )
    }
}
export default SweetAlert2PositionEx