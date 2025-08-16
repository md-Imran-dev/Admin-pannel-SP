import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components";

const ToggleButtons = () => {
  const [activeButton, setActiveButton] = useState("message");
  const { theme } = useContext(ThemeContext);

  const buttonStyle = {
    height: "38px",
    padding: "8px 16px",
    borderRadius: "6px",
    border: `1px solid ${theme.colors.border.card}`,
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
  };

  const activeStyle = {
    ...buttonStyle,
    backgroundColor: theme.colors.primary.main,
    color: "white",
    borderColor: theme.colors.primary.main,
  };

  const inactiveStyle = {
    ...buttonStyle,
    backgroundColor: theme.colors.background.main,
    color: theme.colors.text.primary,
  };

  return (
    <div
      style={{
        display: "flex",
        border: `1px solid ${theme.colors.border.card}`,
        borderRadius: "6px",
      }}
    >
      <button
        style={activeButton === "message" ? activeStyle : inactiveStyle}
        onClick={() => setActiveButton("message")}
      >
        Message
      </button>

      <button
        style={activeButton === "email" ? activeStyle : inactiveStyle}
        onClick={() => setActiveButton("email")}
      >
        Email
      </button>
    </div>
  );
};

export default ToggleButtons;
