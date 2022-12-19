import {useState, createContext} from 'react';
import ContextEx2 from './ContextEx2';

export const UserContext = createContext(); // 1. Context를 생성한다. - 리액트의 기능, context객체의 user를 공유한다.

export default function ContextEx1() {
    const [user, setUser] = useState('jang');
    const context = {//user와 set함수를 함께 넘긴다.
        user:user
        , setUser:setUser.bind(this) // 2. this.setState와 같은 형태로 this와 바인드 하여야만 this를 다른 컴포넌트에 넘길 수 있다.
    }  
    return(
        /* Provider를 통해 공유한다. */
        
        <UserContext.Provider value={context}>
            <h1>{`Hello ${user}`}</h1>
            <ContextEx2/>
        </UserContext.Provider>
    )
}