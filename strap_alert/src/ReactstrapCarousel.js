import {Component} from "react";
import {UncontrolledCarousel} from "reactstrap";
const items = [
    {
          src:'dog.jpg'
        , altText:'강아지1 이미지 대체 문구'
        , caption:'강아지1 설명'
        , header:'강아지1 제목'
    }
    , {
        src:'dog2.jfif'
      , altText:'강아지2 이미지 대체 문구'
      , caption:'강아지2 설명'
      , header:'강아지2 제목'
    }
    , {
        src:'dog3.jfif'
      , altText:'강아지3 이미지 대체 문구'
      , caption:'강아지3 설명'
      , header:'강아지3 제목'
    }
];

class ReactstrapCarousel extends Component {
    render() {
        return(
            <UncontrolledCarousel items={items} style={{display:'inline-block', width: '200px !important', height:'10px !important'}}/> /* 이미지태그는 인라인태그, height가 먹지 않음. */
        );
    }
}

export default ReactstrapCarousel