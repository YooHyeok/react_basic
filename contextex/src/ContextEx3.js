import {useState, useContext} from 'react'; //이미 생성된 Context를 사용할때 useContext를 사용한다.
import {UserContext} from './ContextEx1';

function ContextEx3() {
    const [myuser, setMyUser] = useState('');

    const context = useContext(UserContext);

    return(
        <>
            <h1>Component3</h1>
            <h2>{`Hello ${context.user} again!`}</h2>
            <input type='text' value={myuser} onChange={(e) => {setMyUser(e.target.value)}}></input>
            <button onClick={()=>{context.setUser(myuser)}}> 변경 </button>
        </>
    )
}
export default ContextEx3;