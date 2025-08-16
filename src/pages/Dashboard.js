import React, { useState } from "react";
import Header from "../components/layout/Header";
import MainSidebar from "../components/layout/sidebar/MainSidebar";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import OrderStatusCard from "../components/layout/orders/OrderStatusCard";
import RecentActivities from "../components/layout/activity/RecentActivities";
import RecentOrders from "../components/layout/orders/RecentOrders";
import RevenueDashboard from "../charts/RevenueDashboard";
import styled from "styled-components";
import TabDashboard from "../components/layout/dashboardmain/TabDashboard";
import Tabs from "../components/layout/Tabs";

const DashboardContainer = styled(Box)`
  background-color: ${(props) => props.theme.colors.background.main};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContentWrapper = styled(Box)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: ${(props) => props.theme.spacing(3)};
  padding-right: ${(props) => props.theme.spacing(3)};
  background-color: ${(props) => props.theme.colors.background.card};
  border: 1px solid ${(props) => props.theme.colors.border.card};
  overflow-x: hidden;
  width: 100%;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;

  @media (max-width: 767px) {
    padding-left: ${(props) => props.theme.spacing(1.5)};
    padding-right: ${(props) => props.theme.spacing(1.5)};
  }
`;

const StyledContainer = styled(Container)`
  margin-top: ${(props) => props.theme.spacing(4)};
  margin-bottom: ${(props) => props.theme.spacing(4)};
`;

const ResponsiveBox = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
`;

const CardContainer = styled(Box)`
  flex: 1 1 calc(50% - 8px);
  min-width: 300px;

  @media (max-width: 900px) {
    flex: 1 1 100%;
    min-width: 100%;
    margin-bottom: 12px;
  }
`;

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const tabs = [
    "Dashboard",
    "Orders",
    "Address",
    "Notes",
    "Tasks",
    "Contacts",
    "Credit History",
  ];

  return (
    <DashboardContainer>
      <Header />
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        sx={{
          flex: 1,
          padding: { xs: "8px 8px 0 8px", md: "16px 16px 0 16px" },
          overflow: "hidden",
        }}
      >
        <MainSidebar
          sx={{
            display: { xs: "none", sm: "block" },
            "@media (max-width: 767px)": {
              display: "none",
            },
          }}
        />
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            flexGrow: 1,
            width: "100%",
            overflow: "hidden",
            marginBottom: "16px",
          }}
        >
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ContentWrapper>
            <TabDashboard />

            <ResponsiveBox>
              <CardContainer>
                <OrderStatusCard />
              </CardContainer>
              <CardContainer>
                <RecentActivities />
              </CardContainer>
            </ResponsiveBox>

            <StyledContainer
              maxWidth="xl"
              sx={{
                px: { xs: 1, sm: 2 },
                mt: { xs: 2, sm: 3, md: 4 },
                mb: { xs: 2, sm: 3, md: 4 },
                "@media (max-width: 767px)": {
                  padding: "0 !important",
                  margin: "8px 0 !important",
                },
              }}
            >
              <RecentOrders />
            </StyledContainer>

            <StyledContainer
              maxWidth="xl"
              sx={{
                px: { xs: 1, sm: 2 },
                mt: { xs: 2, sm: 3, md: 4 },
                mb: { xs: 2, sm: 3, md: 4 },
                "@media (max-width: 767px)": {
                  padding: "0 !important",
                  margin: "8px 0 !important",
                },
              }}
            >
              <RevenueDashboard />
            </StyledContainer>

            <Outlet />
          </ContentWrapper>
        </Box>
      </Box>
    </DashboardContainer>
  );
};

export default Dashboard;
