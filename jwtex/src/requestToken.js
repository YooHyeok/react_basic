import axios from "axios"

export const reqToken = async (token, dispatch, cookie, setCookie) => {
    console.log("reqToken : "+token)
    console.log("reqToken : "+cookie.refreshToken)
    try {
        const parameter = {headers:{Authorization:token+","+cookie.refreshToken}} //토큰과 리프레시토큰 함께 전송
        const res = await axios.post('http://localhost:8090/loginCheck',null,parameter) //interCeptor까지만 가므로 url경로는 임의로 지정. securityConfig에 해당 매핑에 대한 권한을 부여한다 (permitAll)
    } catch (error) { //리프레시토큰을 받아오면 인터셉터로부터 
        if(error.request.status==401){
            const rescode = error.response.data.rescode;
            if(rescode==101) { //refreshToken 유효, accessToken, refreshToken 두개의 토큰이 재발급됨

                dispatch({type:"NEWTOKEN", data:error.response.data.accessToken}); //가져온 accessToken을 redux에 새롭게 갱신시켜준다.

                //refreshToken Cookie에 저장
                const expires = new Date(); //쿠키 만료시간 지정
                expires.setDate(expires.getDate()+1) //현재날짜 + 1 = 하루
                setCookie('refreshToken', error.response.data.refreshToken, {url:'/', expires})

            } else if(rescode==102) { //토큰과 정보 초기화
                dispatch({type:'NEWTOKEN', data:''});   
                dispatch({type:'USERID', data:''});   
                // document.location.href="/";
            }
        }
    }
} 