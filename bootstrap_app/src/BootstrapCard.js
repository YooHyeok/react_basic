import {Component} from "react";
class BootstrapCard extends Component {
    render() {
        const imgUrl = "dog.jpg"
        return (
            <div className="container mt-3">
                <h2></h2>
                <p>Image at the top (card-img-top):</p>
                <div className="card" style={{width:"400px"}}>
                    <img className="card-img-top" src={imgUrl} alt="Card image" style={{width:'100%'}}/>
                    <div className="card-body">
                        <h4 className="card-title">크르릉</h4>
                        <p className="card-text">건들면 물어뜯는다</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default BootstrapCard