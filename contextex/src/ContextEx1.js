import {useState, createContext} from 'react';
import ContextEx2 from './ContextEx3';

export const UserConetext = createContext()

function ContextEx1() {
    const [user, setUser] = useState('jang');
    return(
        <UserConetext.Provider value={user}>
            <h1>{`Hello ${user}`}</h1>
            <ContextEx2 user={user}/>
        </UserConetext.Provider>
    )
}
export default ContextEx1;