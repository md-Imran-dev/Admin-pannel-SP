import React from "react";
import { PieChart, Pie, Cell, Label } from "recharts";

// Example data - you can modify this to see how percentages change
const data = [
  { name: "Group A", value: 20 },
  { name: "Group B", value: 20 },
  { name: "Group C", value: 20 },
  { name: "Group D", value: 20 },
  { name: "Group E", value: 20 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

// Calculate the total value - this will update whenever data changes
const total = data.reduce((sum, entry) => sum + entry.value, 0);

export default function CardDashboard() {
  // Custom label for percentage display on each segment
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
    const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontWeight="bold"
        fontSize="10"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // Custom center label component to show the total
  const renderCenterLabel = ({ viewBox }) => {
    const { cx, cy } = viewBox;
    return (
      <>
        <text
          x={cx}
          y={cy - 5}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="18"
          fontWeight="bold"
        >
          {total}
        </text>
        <text
          x={cx}
          y={cy + 15}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="12"
        >
          Total
        </text>
      </>
    );
  };

  return (
    <div style={{ width: "242px", height: "242px" }}>
      <PieChart width={242} height={242}>
        <Pie
          data={data}
          cx={121}
          cy={121}
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0} // Changed from 2 to 0 to remove padding
          dataKey="value"
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label content={renderCenterLabel} position="center" />
        </Pie>
      </PieChart>
    </div>
  );
}
