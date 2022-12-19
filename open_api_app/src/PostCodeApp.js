//npm install -s react-daum-postcode
import{useState} from 'react';
import DaumPostcode from 'react-daum-postcode';

export default function PostCodeApp() {
    const [address, setAddress] = useState("");
    const [openPostcode, setOpenPostcode] = useState(false);
    const handle={
        clickButton : () => {
            setOpenPostcode(!openPostcode);
        },
        selectAddress:(data)=>{
            setAddress(`주소: ${data.address} 우편번호: ${data.zonecode}`);
            setOpenPostcode(false)
        }
    }

    return(
        <div>
            <div style={{width:"500px", height:"30px"}}> {address} </div>
            <button onClick={handle.clickButton}>toggle</button>
            {
                openPostcode && 
                <DaumPostcode 
                                onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
                                
                                autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                                defaultQuery='가산디지털1로 2'/> // 팝업을 열때 기본적으로 입력되는 검색어
            }
        </div>
    )

}