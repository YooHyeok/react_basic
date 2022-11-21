import { Component } from "react";
import  Swal  from "sweetalert2";
class SweetAlert2ConfirmEx extends Component {
    deleteAlert = (e) => {
        Swal.fire({
              title:'정말 삭제하시겠습니까?'
            , icon:'Question'
            , showConfirmButton : true //생략시 기본값 true
            , showCancelButton : true //생략시 기본값 default
            , confirmButtonColor : '#4b088A'
            , cancelButtonColor : '#01df01'
            , confirmButtonText : "예"
            , cancelButtonText : "아니오"
        }).then((result)=>{ // 예 누르면 result값이 true를 반환 (아니오 - undefined)
            if(result.value) {
                document.getElementById('deleteId').remove(); //삭제.
                Swal.fire('Deleted','sweetalert2 삭제 완료', 'success') //title, content, icon 순서
            }
        })
    }
    render() {
        return(
            <>
                <h1 id='deleteId'>sweetalert2</h1>
                <button onClick={e=>this.deleteAlert()}>삭제</button>
            </>
        )
    }
}
export default SweetAlert2ConfirmEx
