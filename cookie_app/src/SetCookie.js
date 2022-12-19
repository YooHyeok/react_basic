import {useState} from 'react';
import {useCookies} from 'react-cookie';

export default function SetCookie() {
    const [data, setData] = useState("");
    const [cookies, setCookies] = useCookies(['data']); //키 목록만 배열로 갖게된다 내부적으로 값을 매핑시켜준다.

    const expires = new Date();
    expires.setMinutes(expires.getMinutes()+2) //현재 시간 + 2 = 지금으로부터 2분 후

    const registCookie = () => {
        setCookies('data',data,{
            url : '/', //현재 브라우저 입장에서 쿠키를 저장하는 url주소
            expires // 자바스크립트 객체 문법 value값과 key값이 동일하면 하나만 선언해도 된다 - expires:expires
        }); //쿠키에 존재하는 'data' 키에 data - value값 초기화

    }
    
    const loadCookie = () => {
        console.log(cookies);
    }

    return(
        <>
            <input type="text" value={data} onChange={ (e) => { setData(e.target.value) } } />
            <button onClick={registCookie}>add cookie</button>
            <button onClick={loadCookie}>load cookie</button>
        </>
    )
}