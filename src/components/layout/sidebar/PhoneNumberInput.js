import React from 'react';
import { Box, Button, TextField, MenuItem, Select } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const PhoneNumberInput = ({ phoneNumbers, onRemovePhone, onChangeCountry, onChangeNumber }) => {
  return (
    <Box sx={{height: '100%'}}>
      {phoneNumbers.map((phone, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box
            sx={{
              border: '1px solid',
              borderColor:  '#ddd',
              borderRadius: 1,
              mr: 1,
              display: 'flex',
              alignItems: 'center',
              px: 1,
              py: 0.5,
              height: '38px',
              fontSize: '14px',
            }}
          >
            <Box component="span" sx={{ mr: 1 }}>
              🇺🇸
            </Box>
            <Select
              value={phone.country}
              onChange={(e) => onChangeCountry(index, e.target.value)}
              variant="standard"
              disableUnderline
              IconComponent={KeyboardArrowDownIcon}
              sx={{ minWidth: 30, fontSize: '12px' }}
            >
              <MenuItem value="US">US</MenuItem>
              <MenuItem value="CA">CA</MenuItem>
              <MenuItem value="UK">UK</MenuItem>
            </Select>
          </Box>
          
          <TextField
            value={phone.number}
            onChange={(e) => onChangeNumber(index, e.target.value)}
            placeholder="Phone Number"
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                borderColor: index === 0 ? '#9c27b0' : 'inherit', height: '38px'
              },
              '& .MuiInputBase-input': {
                fontSize: '14px'
              },
            }}
          />
          
          <Button
            variant="outlined"
            color="error"
            onClick={() => onRemovePhone(index)}
            sx={{
              ml: 1,
              borderRadius: 1.5,
              height: 40,
              textTransform: 'none',
              borderColor: '#f44336',
              color: '#f44336',
              height: '38px',
              fontSize: '12px'
              
            }}
          >
            Remove
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default PhoneNumberInput;