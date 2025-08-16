import React, { useContext } from 'react';
import styled from 'styled-components';
import { CallIcon, MailIcon, MessageIcon, CalendarIcon } from '../../../svgs/icons';
import ThemeContext from '../../../context/ThemeContext';

const ActionGridContainer = styled.div`
  background-color: ${props => props.theme.colors.background.card};
  border: 1px solid ${props => props.theme.colors.border.card};
  border-radius: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const ActionsContainer = styled.div`
  display: flex;
`;

const ActionItem = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.text.primary.dark};
  border-right: 1px solid ${props => props.theme.colors.border.card};

  &:last-child {
    border-right: none;
  }
`;

const ActionIcon = styled.div`
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ActionLabel = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: ${props => props.theme.colors.text.primary.dark};
`;

// Reusable ActionGrid component
const ActionGrid = ({ actions }) => {
  return (
    <ActionsContainer>
      {actions.map((action, index) => (
        <ActionItem key={index} onClick={action.onClick}>
          <ActionIcon>{action.icon}</ActionIcon>
          <ActionLabel>{action.label}</ActionLabel>
        </ActionItem>
      ))}
    </ActionsContainer>
  );
};

const QuickActions = () => {
  const { isDarkMode } = useContext(ThemeContext);
  // Define action items
  const actionItems = [
    {
      icon: <MailIcon height={20} width={20} color={isDarkMode ? '#FFFFFF' : '#0E253C'} />,
      label: 'Email',
      onClick: () => console.log('Email clicked')
    },
    {
      icon: <CallIcon height={20} width={20} color={isDarkMode ? '#FFFFFF' : '#0E253C'} />,
      label: 'Call',
      onClick: () => console.log('Call clicked')
    },
    {
      icon: <MessageIcon height={20} width={20} color={isDarkMode ? '#FFFFFF' : '#0E253C'} />,
      label: 'Message',
      onClick: () => console.log('Message clicked')
    },
    {
      icon: <CalendarIcon height={20} width={20} color={isDarkMode ? '#FFFFFF' : '#0E253C'} />,
      label: 'Calendar',
      onClick: () => console.log('Calendar clicked')
    }
  ];

  return (
    <ActionGridContainer>
      <ActionGrid actions={actionItems} />
    </ActionGridContainer>
  );
};

export default QuickActions;