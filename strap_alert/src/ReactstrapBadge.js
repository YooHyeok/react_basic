import { Component } from 'react';
import { Badge, Button } from 'reactstrap';

class ReactstrapBadge extends Component {
    render() {
        return (
            <>
                <h1>PRODUCT NAME <Badge color="secondary">리중딱</Badge></h1>
                <Button color="warning" outline>
                    outline of Button Tag - prop<Badge color="dark">4</Badge>
                </Button>
                <Badge color="danger" pill>&lt;pill of Badge Tag - prop&gt;</Badge>
                <Badge href="http://naver.com" color="primary">GoLink</Badge>
            </>
        )
    }
}

export default ReactstrapBadge;