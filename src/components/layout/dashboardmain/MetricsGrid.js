import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import MetricCard from "./MetricCard";

const MetricsContainer = styled(Box)`
  display: flex;
  width: 100%;
  overflow-x: auto;
  gap: 16px;
  padding: ${(props) => props.theme.spacing(2)} 0;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const MetricCardWrapper = styled(Box)`
  flex: 1;
  min-width: 220px;
`;

const MetricsGrid = () => {
  const metrics = [
    {
      title: "Total Orders",
      value: "123",
      trendValue: "28%",
      trendDirection: "up",
      period: "Last Month",
    },
    {
      title: "Total Taken",
      value: "123",
      trendValue: "15%",
      trendDirection: "down",
      period: "Last Month",
    },
    {
      title: "Total Revenue",
      value: "123",
      trendValue: "28%",
      trendDirection: "up",
      period: "Last Month",
    },
    {
      title: "Pending Orders",
      value: "$1234.99",
      trendValue: "28%",
      trendDirection: "up",
      period: "Last Month",
    },
    {
      title: "Pending Returns",
      value: "$1234.99",
      trendValue: "28%",
      trendDirection: "up",
      period: "Last Month",
    },
  ];

  return (
    <MetricsContainer>
      {metrics.map((metric, index) => (
        <MetricCardWrapper key={index}>
          <MetricCard
            title={metric.title}
            value={metric.value}
            trendValue={metric.trendValue}
            trendDirection={metric.trendDirection}
            period={metric.period}
          />
        </MetricCardWrapper>
      ))}
    </MetricsContainer>
  );
};

export default MetricsGrid;
