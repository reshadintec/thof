import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./chart.css"
export default function Chart() {
  return (
    <div className="chart">
      <h3 className="chartTitle">Sales Insights</h3>
      <ResponsiveContainer width="100%" >

      </ResponsiveContainer>
    </div>
  )
}
