import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import "./CircleChart.scss";
const data = [
  { name: "views", value: 200 },
  { name: "clicks", value: 65 },
  { name: "signups", value: 22 },
];
const COLORS = ["#fbcf71", "#1f7bb6", "#01aaaa"];

const chart_statistics = [
  { name: "Total Views", count: 200 },
  { name: "Total Clicks", count: 65 },
  { name: "Signups", count: 22 },
];

function CircleChart() {
  return (
    <div className="d-flex align-items-center flex-column circle_container">
      <h4 className="mb-4">Active Medias</h4>
      <div className="circle_chart_context">
        <ResponsiveContainer>
          <PieChart>
            <text
              x={125}
              y={125}
              fill="#bdbdbd"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              50
            </text>
            <Pie
              data={data}
              dataKey="value"
              innerRadius="60%"
              outerRadius="80%"
              fill="#82ca9d"
              startAngle={90}
              endAngle={-270}
              paddingAngle={0}
              blendStroke
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-100">
        <p className="d-flex justify-content-between ctr">
          <span>CTR</span>
          <span>25%</span>
        </p>
        {chart_statistics.map((indicator, i) => (
          <div key={i} className="desc mb-2">
            <div className="desc_circle"></div>
            <p className="desc">
              <span>{indicator.name}</span>
              <span>{indicator.count}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CircleChart;
