import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import { useTheme } from '../context/ThemeContext';

const AppThemeProvider = ({ children }) => {
  const { theme } = useTheme();

  // Convert our theme to MUI theme format
  const muiTheme = createTheme({
    palette: {
      mode: theme.mode,
      primary: {
        main: theme.colors.primary.main,
        light: theme.colors.primary.light,
        dark: theme.colors.primary.dark,
      },
      secondary: {
        main: theme.colors.secondary.main,
        light: theme.colors.secondary.light,
        dark: theme.colors.secondary.dark,
      },
      background: {
        default: theme.colors.background.main,
        paper: theme.colors.background.paper,
      },
      text: {
        primary: theme.colors.text.primary.dark,
        secondary: theme.colors.text.secondary.dark,
        disabled: theme.colors.text.disabled,
      },
      error: {
        main: theme.colors.accent.red,
      },
      warning: {
        main: theme.colors.accent.yellow,
      },
      info: {
        main: theme.colors.accent.blue,
      },
      success: {
        main: theme.colors.accent.green,
      },
    },
    typography: {
      fontFamily: theme.typography.fontFamily,
      fontSize: 16,
    },
    shape: {
      borderRadius: parseInt(theme.borderRadius.md),
    },
    spacing: (factor) => theme.spacing(factor),
  });

  // Global styles
  const globalStyles = {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    'html, body': {
      fontFamily: theme.typography.fontFamily,
      backgroundColor: theme.colors.background.main,
      color: theme.colors.text.primary.dark,
    },
    a: {
      textDecoration: 'none',
      color: 'inherit',
    },
  };

  return (
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <GlobalStyles styles={globalStyles} />
        {children}
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
};

export default AppThemeProvider; 