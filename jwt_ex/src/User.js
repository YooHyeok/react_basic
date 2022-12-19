import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useCookies, setCookie } from "react-cookie"
import {reqToken} from "./requestToken"

export default function User() {
    const token = useSelector(state=>state.Authorization); //값을 못가져온다.
    const userId = useSelector(state=>state.UserId);
    const [cookie, setCookie] = useCookies(["refreshToken"]);
    const dispatch = useDispatch();
    const [user, setUser] = useState({});

    useEffect(()=>{
        reqUser(); // 2. 재요청
    },[token]) // 1. 토큰이 변경되면

    const reqUser = async() => { // async : 동기화.
        if(token == '') return; //로그아웃 일 경우 통신을 하지 않고 반환
        const parameter = {headers: {Authorization:token}, params:{id:userId}}; /* headers 형태와 params 형태로 넘긴다. 내부적으로 정의됨 headers - header, params - ?*/
        try {
            const res = await axios.post('http://localhost:8090/userInfo',null,parameter) //await : 앞에 특정 작업을 처리할때까지 밑에있는 코드를 실행하지 않는다. (동기) - async() 함수 안에서 처리해야한다.
            setUser(res.data);
        } catch(error) {
            if(error.request.status==401) { //유효하지 않으면 401을 보내준다.
                const rescode = error.response.data.rescode; //백엔드에서 rescode를 넣어주는곳을 확인하자.
                if(rescode == 100) {
                    reqToken(token, dispatch, cookie, setCookie); //refreshToken을 보내준다
                }
            }
        }
    }

    return(
        <table style={{margin:'0 auto'}} border="1">
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>NickName</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <th>{user.id}</th>
                    <th>{user.name}</th>
                    <th>{user.nickname}</th>
                    <th>{user.email}</th>
                </tr>
            </tbody>
        </table>
    )
}