import React, { useContext, useState } from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  useMediaQuery,
  useTheme as useMuiTheme,
  Drawer,
  Tooltip,
} from "@mui/material";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThemeContext from "../../context/ThemeContext";
import {
  NotificationIcon,
  SearchIcon,
  DarkModeIcon,
  LightModeIcon,
} from "../../svgs/icons";

const StyledThemeIconButton = styled(IconButton)`
  color: ${(props) => props.theme.colors.text.primary.dark};
  margin-left: ${(props) => props.theme.spacing(2)};
  padding: 8px;

  @media (max-width: 600px) {
    margin-left: ${(props) => props.theme.spacing(1)};
    padding: 6px;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.background.subdued};
  }
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  return (
    <Tooltip title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}>
      <StyledThemeIconButton
        onClick={toggleTheme}
        size={isMobile ? "small" : "medium"}
        aria-label="toggle dark/light theme"
      >
        {isDarkMode ? (
          <LightModeIcon
            width={24}
            height={24}
            color={isDarkMode ? "#FFFFFF" : "#1C274C"}
          />
        ) : (
          <DarkModeIcon
            width={24}
            height={24}
            color={isDarkMode ? "#FFFFFF" : "#1C274C"}
          />
        )}
      </StyledThemeIconButton>
    </Tooltip>
  );
};

const HeaderAppBar = styled.div`
  background-color: ${(props) => props.theme.colors.background.card};
  color: ${(props) => props.theme.colors.text.primary.light};
  box-shadow: none;
  height: ${(props) => (props.isMobile ? "56px" : "64px")};
  gap: ${(props) => (props.isMobile ? "16px" : "32px")};
  flex-shrink: 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.border.card};
`;

const SearchWrapper = styled.div`
  position: relative;
  border-radius: ${(props) => (props.isMobile ? "8px" : "12px")};
  background-color: ${(props) => props.theme.colors.background.main};
  margin-right: ${(props) =>
    props.isMobile ? props.theme.spacing(1) : props.theme.spacing(2)};
  margin-left: ${(props) => (props.isMobile ? props.theme.spacing(1) : 0)};
  width: ${(props) => (props.isMobile ? "100%" : "auto")};
  height: ${(props) => (props.isMobile ? "32px" : "38px")};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: ${(props) => (props.isMobile ? "8px" : "12px")};
  border: 1px solid ${(props) => props.theme.colors.border.card};

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-left: ${(props) => props.theme.spacing(3)};
    width: auto;
  }
`;

const StyledInputBase = styled(InputBase)`
  color: inherit;
  width: 100%;

  .MuiInputBase-input {
    padding: ${(props) =>
      props.isMobile ? props.theme.spacing(0.5) : props.theme.spacing(1)};
    padding-left: ${(props) =>
      props.isMobile ? props.theme.spacing(1) : props.theme.spacing(3)};
    width: 100%;
    font-size: ${(props) => (props.isMobile ? "12px" : "14px")};

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      width: 50ch;
    }
  }
`;

const BreadcrumbBar = styled(Box)`
  background-color: ${(props) => props.theme.colors.background.card};
  border-bottom: 1px solid ${(props) => props.theme.colors.border.card};
  padding: ${(props) => (props.isMobile ? "8px 12px" : "12px 16px")};
  align-items: center;
  flex-shrink: 0;
  display: ${(props) => (props.isMobile ? "none" : "flex")};
`;

const UserAvatar = styled.div`
  background-color: ${(props) =>
    props.theme.mode === "light" ? "#513CCE" : "#8378FF"};
  color: ${(props) =>
    props.theme.mode === "light"
      ? props.theme.colors.text.primary.light
      : props.theme.colors.primary.main};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;

const StyledIconButton = styled(IconButton)`
  color: ${(props) =>
    props.theme.mode === "light"
      ? props.theme.colors.text.primary.dark
      : props.theme.colors.text.primary.light};
  padding: ${(props) => (props.isMobile ? "4px" : "8px")};
  background-color: red;
`;

const TitleText = styled.p`
  color: ${(props) => (props.theme.mode === "light" ? "#0E253C" : "#FFF")};
  font-weight: 500;
  font-size: ${(props) => (props.isMobile ? "10px" : "12px")};
  line-height: ${(props) => (props.isMobile ? "14px" : "18px")};
  margin: ${(props) => (props.isMobile ? "0 0 -2px 0" : "0")};
`;

const SubTitleText = styled.p`
  color: ${(props) =>
    props.theme.mode === "light"
      ? "rgba(14, 37, 60, 0.85)"
      : "rgba(255, 255, 255, 0.80)"};
  font-weight: 400;
  font-size: ${(props) => (props.isMobile ? "8px" : "12px")};
  line-height: ${(props) => (props.isMobile ? "12px" : "18px")};
  margin: 0;
`;

const NotificationButton = styled.button`
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors.border.card};
  background: ${(props) => props.theme.colors.background.main};
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  margin-left: 8px;
`;

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeaderAppBar position="static" isMobile={isMobile}>
        <Toolbar
          sx={{
            minHeight: isMobile ? "56px" : "64px",
            px: isMobile ? 1 : 2,
          }}
        >
          <StyledIconButton
            size={isMobile ? "small" : "medium"}
            edge="start"
            aria-label="open drawer"
            onClick={toggleDrawer}
            isMobile={isMobile}
          >
            <MenuIcon fontSize={isMobile ? "small" : "medium"} />
          </StyledIconButton>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
              {!isDarkMode ? (
                <img
                  src={"/assets/images/logo-light.png"}
                  alt="logo"
                  width={125}
                  height={32}
                />
              ) : (
                <img
                  src={"/assets/images/logo-dark.png"}
                  alt="logo"
                  width={125}
                  height={32}
                />
              )}
            </Box>
          )}

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              mx: isMobile ? 1 : 2,
            }}
          >
            <SearchWrapper isMobile={isMobile}>
              <SearchIcon
                height={isMobile ? 16 : 20}
                width={isMobile ? 16 : 20}
                color={isDarkMode ? "#FFFFFF" : "#0E253C"}
              />
              <StyledInputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
                isMobile={isMobile}
              />
            </SearchWrapper>
          </Box>
          {!isMobile && <ThemeToggle />}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <NotificationButton>
              <Badge badgeContent={0} color="error">
                <NotificationIcon
                  height={20}
                  width={20}
                  color={isDarkMode ? "#FFFFFF" : "#0E253C"}
                  hasFillOpacity={!isDarkMode}
                />
              </Badge>
            </NotificationButton>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: isMobile ? 1 : 2,
              }}
            >
              <UserAvatar isMobile={isMobile}>MS</UserAvatar>
              {!isMobile && (
                <Box sx={{ ml: 1 }}>
                  <TitleText isMobile={isMobile}>Manoj Sharma</TitleText>
                  <SubTitleText isMobile={isMobile}>Super Admin</SubTitleText>
                </Box>
              )}
              <StyledIconButton
                size="small"
                sx={{ p: 0, ml: 0.5 }}
                isMobile={isMobile}
              >
                <ExpandMoreIcon fontSize={isMobile ? "small" : "medium"} />
              </StyledIconButton>
            </Box>
          </Box>
        </Toolbar>
      </HeaderAppBar>

      <BreadcrumbBar isMobile={isMobile}>
        <Typography variant="body2" color="text.primary">
          CRM / Account /{" "}
          <span style={{ fontWeight: 600 }}>Account Details</span>
        </Typography>
      </BreadcrumbBar>

      {/* Side drawer for mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
          {/* Drawer content goes here */}
          <Box sx={{ p: 2, borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
            {!isDarkMode ? (
              <img
                src={"/assets/images/logo-light.png"}
                alt="logo"
                width={125}
                height={32}
              />
            ) : (
              <img
                src={"/assets/images/logo-dark.png"}
                alt="logo"
                width={125}
                height={32}
              />
            )}
          </Box>

          {/* Theme toggle in drawer for mobile view */}
          <Box sx={{ p: 2 }}>
            <ThemeToggle />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
