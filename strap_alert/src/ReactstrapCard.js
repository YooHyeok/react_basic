import {Component} from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

class ReactstrapCard extends Component {
    render() {
        const imgUrl = "dog.jpg";
        return (
            <Card>
                {/* <CardImg top="200px" height="300px" src="https://asq.kr/4KkfRxZfR" alt="Card image cap"></CardImg> */}
                <CardImg top src={imgUrl} alt="Card image cap"></CardImg>
                <CardBody>
                    <CardTitle>Card 제목</CardTitle>
                    <CardSubtitle>Card 부제목</CardSubtitle>
                    <CardText>Card 내용 Lorem Ipsum is simply dummy text.</CardText>
                    <Button>버튼</Button>
                </CardBody>
            </Card>
        );
    }
}

export default ReactstrapCard