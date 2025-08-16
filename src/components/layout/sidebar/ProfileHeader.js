import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu, MenuItem,} from '@mui/material';

// Main container with correct flex properties
const AccountHeaderContainer = styled.div`
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  background-color: ${props => props.theme.colors.background.card};
  border: 1px solid ${props => props.theme.colors.border.card};
  border-radius: 24px;
`;

// Avatar container
const AvatarContainer = styled.div`  
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: #6B46C1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 22px;
  position: relative;
`;

const OnlineIndicator = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #22C55E;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.colors.background.main};
  top: 2px;
  right: 2px;
  z-index: 2;
`;

const EditButton = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255,255,255, 0.30);
  color: #ffffff;
  font-size: 9px;
  line-height: 14px;
  font-weight: 400;
  text-align: center;
  height: 14px;
`;

// Content container
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 4px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const NameRow = styled.div`
  display: flex;
  align-items: flex-start;
`;

const AccountName = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  line-height: 1.2;
  color: ${props => props.theme.colors.text.primary};
`;

const BusinessTag = styled.span`
  background-color: rgba(244, 88, 0, 0.1);
  color: #F45800;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 8px;
  margin-top: 2px;
`;

const AccountEmail = styled.p`
  font-size: 12px;
  color: ${props => props.theme.colors.text.secondary};
  margin: 0;
  margin-top: 4px;
`;

// Form elements for editing
const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Label = styled.label`
  font-size: 12px;
  color: #8378FF;
`;

const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  color: #8378FF;
  padding: 8px;
  font-size: 12px;
  
  &:focus {
    outline: none;
    border-color: #513CCE;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 4px;
`;

const SaveButton = styled.button`
  background-color: #513CCE;
  color: #8378FF;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background-color: #3D2DA3;
  }
`;

const CancelButton = styled.button`
  background-color: transparent;
  color: #8378FF;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

// Actions container
const ActionsContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StatusButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.colors.primary.main};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-transform: none;
  padding: 0;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;

// Component
const ProfileHeader = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [accountName, setAccountName] = useState('Truck Grear');
  const [accountEmail, setAccountEmail] = useState('jillali@onechanneladmin.com');
  const [isActive, setIsActive] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save changes to your backend
  };

  const handleCancel = () => {
    // Reset to original values
    setAccountName('Truck Grear');
    setAccountEmail('jillali@onechanneladmin.com');
    setIsEditing(false);
  };

  const activateAccount = () => {
    setIsActive(true);
    handleClose();
  };
  
  const deactivateAccount = () => {
    setIsActive(false);
    handleClose();
  };

  // Split name into parts for the two-line display
  const nameParts = accountName.split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  return (
    <AccountHeaderContainer>
      <div style={{position: 'relative', }}>
        <OnlineIndicator />
        <AvatarContainer>
          <Avatar>
            TG
            <EditButton>Edit</EditButton>
          </Avatar>
        </AvatarContainer>
      </div>
      
      <ContentContainer>
        {isEditing ? (
          <EditForm>
            <InputGroup>
              <Label htmlFor="accountName">Account Name</Label>
              <Input
                id="accountName"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="accountEmail">Email</Label>
              <Input
                id="accountEmail"
                type="email"
                value={accountEmail}
                onChange={(e) => setAccountEmail(e.target.value)}
              />
            </InputGroup>
            <ButtonGroup>
              <SaveButton onClick={handleSave}>Save</SaveButton>
              <CancelButton onClick={handleCancel}>Cancel</CancelButton>
            </ButtonGroup>
          </EditForm>
        ) : (
          <NameContainer>
            <NameRow>
              <AccountName>{accountName}</AccountName>
              <BusinessTag>BUSINESS</BusinessTag>
            </NameRow>
            <AccountEmail>{accountEmail}</AccountEmail>
          </NameContainer>
        )}
      </ContentContainer>
      
      <ActionsContainer>
        <StatusButton 
          id="status-button"
          aria-controls={open ? 'status-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Change Status
        </StatusButton>
        <Menu
          id="status-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={activateAccount}>Active Account</MenuItem>
          <MenuItem onClick={deactivateAccount}>Deactive Account</MenuItem>
        </Menu>
      </ActionsContainer>
    </AccountHeaderContainer>
  );
};

export default ProfileHeader;