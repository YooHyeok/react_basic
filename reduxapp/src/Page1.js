import {useSelector, useDispatch} from 'react-redux'; // useSelector : 특정 변수의 값을 가져온다. 함수를 인자값으로 넣어야함. / useDispatch : reduce() 함수를 호출
import Page2 from './Page2'

export default function Page1() {

    const data1 = useSelector((statee)=>{return statee.data11}) // None값을 가져온다. -> useSelector를 통해 state값을 가져올 수 있다.
    const dispatch = useDispatch(); //Dispatch에 매개변수는 reduce()의 두번째인자인 action으로 받는다.
    
    return(
        <>
            <h1>{data1}</h1>
            <button onClick={()=>{dispatch({type:"data1", dataa:"Hong"})}}>change String</button>
            <Page2/>
        </>
    )
}