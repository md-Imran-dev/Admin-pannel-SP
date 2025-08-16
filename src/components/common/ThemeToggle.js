import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { styled } from "styled-components";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "../../context/ThemeContext";

const StyledIconButton = styled(IconButton)`
  color: ${(props) => props.theme.colors.text.primary.dark};
  margin-left: ${(props) => props.theme.spacing(2)};

  &:hover {
    background-color: ${(props) => props.theme.colors.background.subdued};
  }
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Tooltip title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}>
      <StyledIconButton onClick={toggleTheme} size="large">
        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </StyledIconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
