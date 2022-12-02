import axios from 'axios';
import { useState } from 'react';
import {Button} from 'reactstrap';
import SubwaySheet from './SubwaySheet';
import SubwayLineChart from './SubwayLineChart';
import SubwayBarChart from './SubwayBarChart';
import SubwayAreaChart from './SubwayAreaChart';
import SubwayComposedChart from './SubwayComposedChart';

//npm install -s recharts
export default function SubwayApi() {

    const [viewChart, setViewChart] = useState(false); //보이지않게처리한후 통신할때 setViewChart를 true로 보이게한다.

    const [row, setRow] = useState([]);

    const apiKey = "61665a6b62796a6b39327451504557";
    const period = "20221015";
    const url = "http://openapi.seoul.go.kr:8088/"+apiKey+"/json/CardSubwayStatsNew/1/10/"+period

    const apiRequest = () => {
        axios.get(url)
        .then((response) => {
        let dataRow = response.data.CardSubwayStatsNew.row;
        setRow(dataRow)
        setViewChart(true)
        })
        .catch((error) => {
        console.log(error)
        })
    }

    return(
        <>
        <Button onClick={apiRequest}>데이터 가져오기</Button>
        <br/><br/>
            {/* 앞에가 true면 뒤에껄 읽는다! viewChart = true/false */}
        {   
            viewChart && (
                    <>
                    <SubwaySheet row={row}/><br/>
                    <SubwayLineChart row={row}/><br/>
                    <SubwayBarChart row={row}/><br/>
                    <SubwayAreaChart row={row}/><br/>
                    <SubwayComposedChart row={row}/><br/>
                    </>
            )

        }
        </>
    )
}