import {Table} from "reactstrap";

export default function SubwaySheet({row}) {
    return (

    <Table style={{width:"1000px", margin:"0 auto"}}>
        <tbody>
            <tr>
                <th>갯수</th>
                <th>날짜</th>
                <th>호선명</th>
                <th>역이름</th>
                <th>승차총승객수</th>
                <th>하차총승객수</th>
                <th>승차-하차</th>
            </tr>
            {/* 중괄호 의미 객체를 가져올때는 값을   */}
            {
                row.map((item,index) => {
                    return(
                        <tr key={item.SUB_STA_NM}> {/* 리액트 돔이 반복적으로 객체를 관리 하는데, 반복적인 트리로 리랜더링 할때 키를 주지않으면 엉킨다. */}
                            <td>{index}</td>
                            <td>{item.USE_DT}</td>
                            <td>{item.LINE_NUM}</td>
                            <td>{item.SUB_STA_NM}</td>
                            <td>{item.RIDE_PASGR_NUM}명</td>
                            <td>{item.ALIGHT_PASGR_NUM}명</td>
                            <td>{item.RIDE_PASGR_NUM - item.ALIGHT_PASGR_NUM}명</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </Table>
        )
}
