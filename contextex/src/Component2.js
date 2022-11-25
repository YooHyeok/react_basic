import Component3 from "./Component3"
function Component2({user}) { //props로 받을수도 있다.
    return(
        <>
            <h1>Component2</h1>
            <Component3 user={user}/>
        </>
    )
}

export default Component2;