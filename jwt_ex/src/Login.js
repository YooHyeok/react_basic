import { useRef, useState} from "react"; // Element 태그를 document.get 으로 가져오지않고 명시적으로 지정해서 연결해서 사용한다.
import {useCookies} from 'react-cookie';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';

export default function Login() {

    const formRef = useRef();
    
    const [id,setId] = useState('');
    const [password,setPassword] = useState('');
    const [cookie, setCookie] = useCookies(['refreshToken']);
    const dispatch = useDispatch();

    const login = (e) => {
        const param = {params : { id:formRef.current.id.value, password:formRef.current.password.value } } //ref자체가 current객체를 가지고있다. 값을 가지고올때 가져온다(꼭 form태그에서만이 아니다.)
        e.preventDefault();
        axios.post('http://localhost:8090/login', null, param)
        .then((res) => {
            //accessToken redux에 저장
            dispatch({type:"NEWTOKEN", data:res.data.accessToken});

            //userId redux에 저장
            dispatch({type:"USERID", data:res.data.userId});

            //refreshToken Cookie에 저장
            const expires = new Date(); //쿠키 만료시간 지정
            expires.setDate(expires.getDate()+1) //현재날짜 + 1 = 하루
            setCookie('refreshToken', res.data.refreshToken, {url:'/', expires})
        })
        .catch(err=>{ 
            console.log(err);
        })

    }
    return ( 
        <form ref={formRef} onSubmit={login}>
            <span>
                <label htmlFor="id">아이디</label>
            {/* <input type="text" name="id" id="id" value={id} onChange={(e)=>setId(e.target.value)} required /> */}
            <input type="text" name="id" id="id" value={id} onChange={(e)=>setId(e.target.value)} required />
            </span><br/>
            <span>
                <label htmlFor="password">비밀번호</label>
            {/* <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required /> */}
            <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
            </span><br/>
            <input type="submit"/>
        </form>
    )
}