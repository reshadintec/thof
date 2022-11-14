import "./chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({title, data, datakey, grid}) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer className="responsiveContainer" width="100%" aspect={4/1} >
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#e3cb99" />
          <Line type="monotone" dataKey={datakey} stroke="#e3cb99"/>
          <Tooltip className="tooltipContainer" stroke="red"/>
          {grid && <CartesianGrid  stroke="#cecba89a"/>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}