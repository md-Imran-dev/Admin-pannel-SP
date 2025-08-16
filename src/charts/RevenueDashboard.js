import React, { useContext, useState } from "react";
import { Box, Paper, Typography, Select, MenuItem } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ThemeContext from "../context/ThemeContext";
import { revenueData } from "../data/revenueData";
import ToggleButton from "../components/common/ToggleButton";

const RevenueDashboard = () => {
  const [category, setCategory] = useState("All Categories");
  const [year, setYear] = useState("2023");
  const { theme } = useContext(ThemeContext);

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        padding: "1px",
        border: `1px solid ${theme.colors.border.card}`,
        backgroundColor: theme.colors.background.main,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          borderBottom: `1px solid ${theme.colors.border.card}`,
          padding: "16px",
          "@media (max-width: 767px)": {
            flexDirection: "column",
            gap: 1,
          },
        }}
      >
        <ToggleButton tabs={["Revenue", "Orders", "Customers"]} />
        <Box
          sx={{
            display: "flex",
            gap: 1,
            "@media (max-width: 767px)": {
              width: "100%",
              justifyContent: "space-between",
            },
          }}
        >
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            displayEmpty
            size="small"
            IconComponent={KeyboardArrowDownIcon}
            sx={{
              minWidth: { xs: 110, sm: 140 },
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: theme.colors.border.card,
              },
              fontSize: "14px",
              // boxShadow: "0px 1px 2px 0px ${theme.colors.border.card}",
            }}
          >
            <MenuItem value="All Categories">All Categories</MenuItem>
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Clothing">Clothing</MenuItem>
          </Select>

          <Select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            displayEmpty
            size="small"
            IconComponent={KeyboardArrowDownIcon}
            sx={{
              minWidth: { xs: 90, sm: 100 },
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: theme.colors.border.card,
              },
              fontSize: "14px",
              color: theme.colors.text.primary,
            }}
            startAdornment={
              <CalendarMonthIcon
                fontSize="small"
                sx={{ ml: 1, mr: 0.5, color: theme.colors.text.primary }}
              />
            }
          >
            <MenuItem value="2023">2023</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
          </Select>
        </Box>
      </Box>

      {/* Revenue title and total */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          color: theme.colors.text.primary,
        }}
      >
        <Typography
          variant="h6"
          fontWeight="medium"
          sx={{
            color: theme.colors.text.primary,
            fontSize: "18px",
            paddingLeft: "1.5rem",
          }}
        >
          Revenue
        </Typography>
        <Typography variant="subtitle1">
          Total Revenue:{" "}
          <Box
            component="span"
            fontWeight="bold"
            color={theme.colors.text.primary}
          >
            ${"89,235.89"}
          </Box>
        </Typography>
      </Box>

      <Box sx={{ width: "100%", height: 400, mt: 4 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={revenueData}
            margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
            barSize={40}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e0e0e0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              dy={10}
              tick={{ fill: "#666" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickCount={6}
              domain={[0, 1000]}
              ticks={[0, 200, 400, 600, 800, 1000]}
              tickFormatter={(value) => `${value.toFixed(2)}`}
              tick={{ fill: "#666" }}
            />
            <Bar
              dataKey="value"
              fill="#5e35b1"
              radius={[4, 4, 0, 0]}
              label={{
                position: "top",
                content: (props) => {
                  const { x, y, width, value } = props;
                  return (
                    <text
                      x={x + width / 2}
                      y={y - 10}
                      fill="#666"
                      textAnchor="middle"
                      fontSize={12}
                      color={theme.colors.text.primary}
                    >
                      ${value.toFixed(2)}
                    </text>
                  );
                },
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      {/* Year indicator */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 0 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "flex",
            alignItems: "center",
            color: theme.colors.text.primary,
            fontSize: "12px",
          }}
        >
          • 2023
        </Typography>
      </Box>
    </Paper>
  );
};

export default RevenueDashboard;
