import React, { useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import PhoneNumberInput from "./PhoneNumberInput";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import { SaveIcon } from "../../../svgs/icons";

const MainContainer = styled.div`
  padding: 16px;
  align-self: stretch;
  background-color: ${(props) => props.theme.colors.background.card};
  border: 1px solid ${(props) => props.theme.colors.border.card};
  border-radius: 24px;
  width: 100%;
  height: auto;
`;

// Common styles for all input fields
const inputStyles = {
  "& .MuiInputBase-input": {
    fontSize: "14px",
  },
};

const BusinessDetailsForm = () => {
  const [formData, setFormData] = useState({
    accountName: "TRUCK GREAR",
    email: "Jillali@Onechanneladmin.Com",
    contactOwner: "Suchithkumar@Onechanneladmin.Com",
    phoneNumbers: [
      { country: "US", number: "+1 344 434 4455" },
      { country: "US", number: "+1 344 434 4455" },
    ],
  });

  const handleAddPhone = () => {
    setFormData({
      ...formData,
      phoneNumbers: [...formData.phoneNumbers, { country: "US", number: "" }],
    });
  };

  const handleRemovePhone = (index) => {
    const updatedPhones = [...formData.phoneNumbers];
    updatedPhones.splice(index, 1);
    setFormData({ ...formData, phoneNumbers: updatedPhones });
  };

  const handleChangeCountry = (index, value) => {
    const updatedPhones = [...formData.phoneNumbers];
    updatedPhones[index].country = value;
    setFormData({ ...formData, phoneNumbers: updatedPhones });
  };

  const handleChangeNumber = (index, value) => {
    const updatedPhones = [...formData.phoneNumbers];
    updatedPhones[index].number = value;
    setFormData({ ...formData, phoneNumbers: updatedPhones });
  };

  return (
    <MainContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h6" fontWeight="bold" fontSize="16px">
          Business Details
        </Typography>

        <Button
          startIcon={<SaveIcon height={14} width={14} />}
          style={{ fontSize: "14px", color: "#22C55E" }}
        >
          Save & Close
        </Button>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography
          variant="subtitle2"
          gutterBottom
          fontWeight="bold"
          fontSize="12px"
        >
          Account Name
        </Typography>
        <TextField
          fullWidth
          value={formData.accountName}
          onChange={(e) =>
            setFormData({ ...formData, accountName: e.target.value })
          }
          variant="outlined"
          size="small"
          sx={inputStyles}
        />
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography
          variant="subtitle2"
          gutterBottom
          fontWeight="bold"
          fontSize="12px"
        >
          Email
        </Typography>
        <TextField
          fullWidth
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          variant="outlined"
          size="small"
          sx={inputStyles}
        />
      </Box>

      <Box sx={{ mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle2"
            gutterBottom
            fontWeight="bold"
            fontSize="12px"
          >
            Phone Number
          </Typography>
          <IconButton color="primary" size="small" sx={{ color: "#9c27b0" }}>
            <AddIcon onClick={handleAddPhone} />
          </IconButton>
        </Box>

        <PhoneNumberInput
          phoneNumbers={formData.phoneNumbers}
          onAddPhone={handleAddPhone}
          onRemovePhone={handleRemovePhone}
          onChangeCountry={handleChangeCountry}
          onChangeNumber={handleChangeNumber}
        />
      </Box>

      <Box>
        <Typography
          variant="subtitle2"
          gutterBottom
          fontWeight="bold"
          fontSize="12px"
        >
          Contact Owner
        </Typography>
        <TextField
          select
          fullWidth
          value={formData.contactOwner}
          onChange={(e) =>
            setFormData({ ...formData, contactOwner: e.target.value })
          }
          variant="outlined"
          size="small"
          sx={inputStyles}
          SelectProps={{
            IconComponent: KeyboardArrowDownIcon,
            native: false,
            renderValue: (value) => value,
          }}
        >
          <option value="Suchithkumar@Onechanneladmin.Com">
            Suchithkumar@Onechanneladmin.Com
          </option>
          <option value="support@onechanneladmin.com">
            support@onechanneladmin.com
          </option>
        </TextField>
      </Box>
    </MainContainer>
  );
};

export default BusinessDetailsForm;
