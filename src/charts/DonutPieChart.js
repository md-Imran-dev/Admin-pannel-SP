import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import { pieData, PIE_COLORS } from "../data/chartData";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function DonutPieChart() {
  const { theme } = useContext(ThemeContext);
  // Calculate total value from the imported data
  const total = pieData.reduce((sum, entry) => sum + entry.value, 0);

  // Render percentage labels on segments
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

  // Render total in the center
  const renderCenterLabel = ({ viewBox }) => {
    const { cx, cy } = viewBox;
    return (
      <>
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="18"
          fontWeight="bold"
          fill={theme.colors.text.primary.dark}
        >
          {total}
        </text>
      </>
    );
  };

  return (
    <ResponsiveContainer width="auto%" height={242}>
      <PieChart>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={PIE_COLORS[index % PIE_COLORS.length]}
            />
          ))}
          <Label content={renderCenterLabel} position="center" />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
