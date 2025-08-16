import React from "react";
import { Box } from "@mui/material";
import ProfileHeader from "./ProfileHeader";
import QuickActions from "./QuickActions";
import BusinessDetailsForm from "./BusinessDetailsForm";

function MainSidebar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // width: '390px',
        gap: "16px",
        marginRight: "12px",
      }}
    >
      <ProfileHeader />
      <QuickActions />
      <BusinessDetailsForm />
    </Box>
  );
}

export default MainSidebar;
