import {BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default function SubwayBarChart({row}) {
    return (
        <div style={{width:"1000px", margin:"0 auto"}}>
            <BarChart width={1000} height={300} data={row} margin={{top:5, right:30, left:20, bottom:5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey={"SUB_STA_NM"}/><YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar type="monotone" dataKey={"RIDE_PASGR_NUM"} fill="#8884d8"/>
                <Bar type="monotone" dataKey={"ALIGHT_PASGR_NUM"} fill="#82ca9d" />
            </BarChart>
        </div>
        )
}