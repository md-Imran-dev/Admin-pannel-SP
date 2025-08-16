import React, { useContext, useState } from "react";
import { Box, Typography, Paper, Select, MenuItem } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styled from "styled-components";
import ThemeContext from "../../../context/ThemeContext";
import DonutPieChart from "../../../charts/DonutPieChart";
import { statusData } from "../../../data/statusData";

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 16px",
  borderBottom: `1px solid ${theme.colors.border.card}`,

  "@media (max-width: 767px)": {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
  },
}));

const StatusGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "repeat(3, 1fr)",
  flex: "1 1 65%",

  "@media (max-width: 767px)": {
    flex: "1 1 100%",
    width: "100%",
  },
}));

const StatusItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "32px 20px",
  borderBottom: `1px solid ${theme.colors.border.card}`,
  gap: 10,

  "@media (max-width: 767px)": {
    padding: "20px 16px",
  },
}));

const StatusIcon = styled(Box)(({ color }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 42,
  height: 42,
  borderRadius: "50%",
  marginBottom: 8,
}));

const ChartContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
  flex: "1 1 35%",

  "@media (max-width: 767px)": {
    flex: "1 1 100%",
    width: "100%",
    padding: theme.spacing(3, 2, 4, 2),
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",

  "@media (max-width: 767px)": {
    flexDirection: "column",
  },
}));

const OrderStatusCard = () => {
  const [category, setCategory] = useState("All Categories");
  const [year, setYear] = useState("2023");
  const { theme, isDarkMode } = useContext(ThemeContext);

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        width: "100%",
        border: `1px solid ${theme.colors.border.card}`,
        backgroundColor: theme.colors.background.main,
      }}
    >
      <HeaderContainer>
        <Typography
          variant="h6"
          fontWeight="600"
          sx={{
            fontSize: "18px",
            // padding: "12px 12px 12px 16px",
            color: theme.colors.text.primary,
            fontWeight: "600",
          }}
        >
          Order Status
        </Typography>

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
      </HeaderContainer>

      <ContentContainer>
        <StatusGrid>
          {statusData.map((status, index) => (
            <StatusItem
              key={index}
              sx={{
                borderRight:
                  index % 2 === 0
                    ? `1px solid ${theme.colors.border.card}`
                    : "none",
                borderBottom:
                  index < 4 ? `1px solid ${theme.colors.border.card}` : "none",
              }}
            >
              <StatusIcon color={status.color}>
                <span
                  className="material-icons-outlined"
                  style={{ fontSize: "22px" }}
                >
                  {status.icon(isDarkMode ? "#8378FF" : "#513CCE")}
                </span>
              </StatusIcon>
              <div>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 0.5, fontSize: "14px" }}
                >
                  {status.name}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ fontSize: "24px" }}
                >
                  {status.value}
                </Typography>
              </div>
            </StatusItem>
          ))}
        </StatusGrid>

        <ChartContainer>
          <Box
            sx={{
              width: "100%",
              // height: "100%",
              maxWidth: 250,
              margin: "0 auto",
            }}
          >
            <DonutPieChart />
          </Box>
        </ChartContainer>
      </ContentContainer>
    </Paper>
  );
};

export default OrderStatusCard;
