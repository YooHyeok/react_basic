import {createContext, useContext} from 'react';

function ContextEx3() {
    const user = useContext(UserContext);
    return(
        <>
            <h1>Component3</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    )
}
export default ContextEx3;