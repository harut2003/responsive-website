import Select from "../select/Select";
import "./ColumnChart.scss";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

function ColumnChart() {
  const data = [
    { day: "1", click: 18, view: -30, signup: 40 },
    { day: "2", click: 58, view: 28, signup: 50 },
    { day: "3", click: 18, view: 55, signup: 0 },
    { day: "4", click: -39, view: 18, signup: -42 },
    { day: "5", click: -30, view: -40, signup: -20 },
    { day: "6", click: 25, view: -30, signup: 40 },
    { day: "7", click: 50, view: 20, signup: 55 },
  ];
  return (
    <div className="col_chart_container">
      <div className="d-flex col_title_context justify-content-between ">
        <h4>Media Staats</h4>
        <Select />
      </div>
      <div className="d-flex justify-content-center chart_context">
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: -35,
              bottom: 5,
            }}
          >
            <Line type="monotone" dataKey="click" stroke="#fbcf71" />
            <Line type="monotone" dataKey="view" stroke="#1f7bb6" />
            <Line type="monotone" dataKey="signup" stroke="#1abc9c" />
            <CartesianGrid stroke="black" vertical={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              type="number"
              domain={[-60, 60]}
              tickCount={8}
              tick={{ fill: "white" }}
            />
            <XAxis
              dataKey="day"
              tick={false}
              axisLine={{ stroke: "black" }}
              strokeWidth={0.1}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="desc_col">
        <div>
          <div className="col_coube"></div>
          <span>Clicks</span>
        </div>
        <div>
          <div className="col_coube"></div>
          <span>Page view</span>
        </div>
        <div>
          <div className="col_coube"></div>
          <span>Sign ups</span>
        </div>
      </div>
    </div>
  );
}

export default ColumnChart;
