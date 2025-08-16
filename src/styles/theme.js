const globalComponentOverrides = {
  MuiInputBase: {
    styleOverrides: {
      input: {
        fontSize: "14px",
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      select: {
        fontSize: "14px",
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontSize: "14px",
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        fontSize: "14px",
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      input: {
        fontSize: "14px",
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        "& .MuiInputBase-input": {
          fontSize: "14px",
        },
      },
    },
  },
};

const lightTheme = {
  mode: "light",
  colors: {
    // Primary colors
    primary: {
      main: "#513CCE", // Button - Light (purple)
      light: "#8378FF", // Light purple variant
      dark: "#2E42A5", // Dark blue variant
    },

    // Secondary/accent colors
    secondary: {
      main: "#F45800", // Orange
      light: "#FF9900", // Light orange
      dark: "#E48D21", // Dark orange
    },

    // Background colors
    background: {
      main: "#F6F8F9", // Light/Main BG (white)
      dark: "#202124", // Dark BG/Main BG
      paper: "#F6F8F9", // Light/Sub BG
      subdued: "#F7FCFF", // Very light blue-tinted background,
      card: "#FFFFFF",
      button: "#FFFFFF",
    },

    // Text colors
    text: {
      primary: {
        light: "#FFFFFF", // Light Text/Text Primary (on dark backgrounds)
        dark: "#202124", // Dark Text/Text Primary (on light backgrounds)
      },
      secondary: {
        light: "#F7FCFF", // Light Text/Text Secondary
        dark: "#696A6C", // Darker gray text
      },
      disabled: "#B2B4B8", // Light Text/Text Disabled
    },

    // Gray shades
    gray: {
      "05": "#F6F8F9", // Light - Gray/05
      10: "#DADCE0", // Light - Gray/10
      20: "#D9D9D9", // Light - Gray/20
      30: "#B2B4B8", // Light - Gray/30
      50: "#5F6368", // Medium gray
      70: "#3C4043", // Darker gray
    },

    // Accent/Semantic colors
    accent: {
      red: "#E31D1C", // Red / Error
      green: "#22C55E", // Green / Success
      yellow: "#F5AF02", // Yellow / Warning
      blue: "#0071CE", // Blue / Info
      pink: "#E53238", // Website/Pink
    },

    // Other colors
    other: {
      one: "#FF9900", // Other/1 (orange)
      two: "#F6F8F9", // Other/2
      three: "#0064D2", // Other/3 (blue)
      four: "#22C55E", // Other/4 (green)
      five: "#E31D1C", // Other/5 (red)
    },

    // Border colors
    border: {
      light: "#DADCE0", // Border/Light
      dark: "#2D2D2D",
      card: "rgba(14, 37, 60, 0.10)",
    },
  },

  // Typography settings
  typography: {
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    fontSizes: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      md: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  // Spacing scale
  spacing: (multiplier = 1) => `${4 * multiplier}px`,

  // Breakpoints
  breakpoints: {
    xs: "0px",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px",
  },

  // Border radius
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    round: "50%",
  },

  // Shadows
  shadows: {
    sm: "0px 2px 4px rgba(0, 0, 0, 0.05)",
    md: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    lg: "0px 8px 16px rgba(0, 0, 0, 0.1)",
    xl: "0px 12px 24px rgba(0, 0, 0, 0.15)",
  },

  // Transitions
  transition: {
    fast: "150ms ease-in-out",
    normal: "300ms ease-in-out",
    slow: "500ms ease-in-out",
  },

  // MUI component overrides
  components: globalComponentOverrides,
};

const darkTheme = {
  ...lightTheme,
  mode: "dark",
  colors: {
    ...lightTheme.colors,
    background: {
      main: "#010D19",
      dark: "#000000",
      paper: "#132F4C",
      subdued: "#1E3A57",
      card: "#001121",
      button: "#513CCE",
    },
    text: {
      primary: {
        light: "#FFFFFF",
        dark: "#FFFFFF",
      },
      secondary: {
        light: "#B2BAC2",
        dark: "#B2BAC2",
      },
      disabled: "#4B5563",
    },
    gray: {
      "05": "#132F4C",
      10: "#1E3A57",
      20: "#2D4B6E",
      30: "#3D5A80",
      50: "#64748B",
      70: "#94A3B8",
    },
    border: {
      light: "#2D4B6E",
      dark: "#1E3A57",
      card: "rgba(255, 255, 255, 0.13)",
    },
  },
  shadows: {
    sm: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    md: "0px 4px 8px rgba(0, 0, 0, 0.3)",
    lg: "0px 8px 16px rgba(0, 0, 0, 0.3)",
    xl: "0px 12px 24px rgba(0, 0, 0, 0.4)",
  },
  components: globalComponentOverrides,
};

export { lightTheme, darkTheme };
