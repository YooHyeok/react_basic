import {useState} from 'react'
import Component2 from "./Component2"
function Component1() {
    const [user, setUser] = useState('hong')
    return(
        <>
            <h1>Component1</h1>
            <Component2 user={user}/>
        </>
    )
}

export default Component1;