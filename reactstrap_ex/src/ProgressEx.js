import { Component } from "react";
import { Progress } from "reactstrap";

class ProgressEx extends Component {
    constructor(props) {
        super(props);
        this.state={progress:0}
    }
    progress = () => {
        if(this.state.progress !== 100 ) {
            setTimeout(function() {
                console.log(this)
                this.setState({progress:this.state.progress+1})
            }.bind(this), 100);

            // let id = setInterval(()=>{ /* state값을 1씩 증가시킨다. */
            //     if(this.state.progress == 100) {
            //         // clearInterval(id);
            //         return;
            //     }
            //     this.setState({progress:this.state.progress+1})
            // },100)
            
        }
    }
    componentDidMount () { /* 화면이 로드되면 progress함수를 자동 호출 */
        this.progress();
    }
    render() {
        return (
            <>
            <Progress color="info" value={this.state.progress}>{this.state.progress}</Progress>
            <Progress multi>
                <Progress bar color="warning" value="25">25%</Progress>
                <Progress bar color="success" value="35">react</Progress>
                <Progress bar value="20">start</Progress>
                <Progress bar color="danger" value="20">20%</Progress>

            </Progress>
            </>
        )
    }
}

export default ProgressEx;