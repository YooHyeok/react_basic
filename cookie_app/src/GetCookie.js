import {useState} from 'react';
import {useCookies} from 'react-cookie';

export default function GetCookie() {
    const [cookies, setCookie, removeCookie] = useCookies(['data']);
    const [data, setData] = useState('');

    const loadCookie = () => {
        setData(cookies['data']);
    }

    const deleteCookie = () => {
        removeCookie('data');
    }

    return(
        <>
            <button onClick={deleteCookie}>remove cookie</button>
            <h1>cookie : {cookies.data}</h1>
        </>
    )
}