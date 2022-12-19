import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // redux state값을 읽어온다 토큰값과 userId값을 가져온다.

export default function Header() {

    const token = useSelector( state=> state.Authorization );
    const userId = useSelector( (state) => {return state.UserId} );
    
    const dispatch = useDispatch();

    const logout = () => { //토큰값, userId 초기화
        dispatch({type:"NEWTOKEN", data:''})
        dispatch({type:"USERID", data:''})
        document.location.href='/';
    }
    return(
        <div style={{backgroundColor:'lightGreen', width:'100%'}}>
            <ul className="nav-items">
                <li className="nav-item">
                    { token }
                    { token=='' && <Link to={'/'}>로그인</Link> }
                    { userId }{ userId!='' &&<Link onClick={logout}>로그아웃</Link> }
                </li>
                    { userId!='' && (
                        <li className="nav-item">
                            <Link to={'/user'}>마이페이지</Link>
                        </li>
                    )}
                
            </ul>
        </div>
    )
}