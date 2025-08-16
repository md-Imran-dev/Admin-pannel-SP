import React, { useContext, useState } from "react";
import styled from "styled-components";
import ThemeContext from "../../context/ThemeContext";

const TabContainer = styled.div`
  display: flex;
  border-radius: 12px;
  gap: 4px;
  width: fit-content;
  border: 1px solid ${(props) => props.theme.colors.border.card};
  background-color: ${(props) => props.theme.colors.background.main};
`;

const TabButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: ${({ active }) => (active ? 500 : 400)};
  line-height: 22px;
  border-radius: 12px;
  transition: all 0.2s ease-in-out;
  border: ${({ active, theme }) =>
    active ? `1px solid ${theme.colors.border.card}` : "none"};
  color: ${({ active, darkMode }) =>
    active
      ? darkMode
        ? "#fff"
        : "#0E253C"
      : darkMode
      ? "rgba(255, 255, 255, 0.80)"
      : "rgba(14, 37, 60, 0.85)"};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.background.button : "transparent"};
  box-shadow: ${({ active }) =>
    active ? "0 1px 2px rgba(0, 0, 0, 0.06)" : "none"};
`;

const ToggleButton = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          active={activeTab === tab}
          onClick={() => setActiveTab(tab)}
          darkMode={isDarkMode}
        >
          {tab}
        </TabButton>
      ))}
    </TabContainer>
  );
};

export default ToggleButton;
