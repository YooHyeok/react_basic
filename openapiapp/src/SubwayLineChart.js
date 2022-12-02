import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default function SubwayLineChart({row}) {
    return (
        <div style={{width:"1000px", margin:"0 auto"}}>
            <LineChart width={1000} height={300} data={row} margin={{top:5, right:30, left:20, bottom:5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey={"SUB_STA_NM"}/><YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey={"RIDE_PASGR_NUM"} stroke="#8884d8" activeDot={{r:8}}/>
                <Line type="monotone" dataKey={"ALIGHT_PASGR_NUM"} stroke="#82ca9d" />
            </LineChart>
        </div>
        )
}