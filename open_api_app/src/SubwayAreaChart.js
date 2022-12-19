import {useState, useEffect} from 'react';
import {AreaChart, Area, Legend, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

export default function SubwayAreaChart({row}) {
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(row.map((item)=>{
            return(
                {역이름:item.SUB_STA_NM, 유동인구수:item.RIDE_PASGR_NUM+item.ALIGHT_PASGR_NUM}
                )
            }))
    },[]);

    return (
        <div style={{width:"1000px", margin:"0 auto"}}>
            {/* data={}에 변수를 담아준다. 그럼 dataKey와 맵핑이된다. */}
            <AreaChart width={1200} height={300} data={data} margin={{top:5,right:50,left:20,bottom:5}}>
                <CartesianGrid strokeDasharray="3 3"/> {/* DashArray : 점선의 길이 "가로 세로" */}
                <XAxis dataKey="역이름" /><YAxis/>
                <Tooltip/>
                <Legend/>
                <Area type="monotone" dataKey="유동인구수" stroke="#8884d8" fill={"#8884d8"}/>
            </AreaChart>
        </div>
    )
}