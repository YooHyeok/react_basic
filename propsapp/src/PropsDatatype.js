import {Component} from "react";
import datatype from "prop-types"; //datatype을 사용하기 위해 import해줘야한다.
/* function PropsDatatype(props) {
    return (
        
        
    );
} */
/* 데이터 타입을 props로 받아와서 명시적으로 지정하는 수업 */
class PropsDatatype extends Component{
    render() {
        let {
            String
            , Number
            , Boolean
            , Array
            , ObjectJson
            , Function
            } = this.props;
        return(
            <div style={{padding:"0px"}}>
            <p>StringProps: {String}</p>
            <p>NumberProps: {Number}</p>
            <p>BooleanProps: {Boolean.toString()}</p>
            <p>ArrayProps: {Array.toString()}</p>
            <p>ObjectJsonProps: {JSON.stringify(ObjectJson)}</p>
            <p>FunctionProps: {Function}</p>
        </div>
        );
    }
}
/* 타입을 가져오기 위해서는 명시적으로 지정해줘야한다.
최상단에 datatype import해줘야한다.*/
PropsDatatype.propTypes = {
      String:datatype.string
    , Number:datatype.number
    , Boolean:datatype.bool
    , Array:datatype.array
    , ObjectJson:datatype.object
    , Function:datatype.func
}
export default PropsDatatype;