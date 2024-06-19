import React from 'react';
import { Grid, Typography, ToggleButtonGroup, Button } from '@mui/material';
import { useState } from 'react';

const ButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };
  return (
    <ToggleButtonGroup
      exclusive
      aria-label="selectPrevQuarter"
      style={{ width: 300, marginTop: 20, marginBottom: 20 }}
    >
      <Grid
        item
        xs={12}
        container
        gap="10px"
        direction="column"
        alignItems="center"
      >
        {/* <Button
          width="100%"
          sx={{
            backgroundColor: selectedButton === 1 ? 'blue' : 'grey',
            borderRadius: '6px',
            padding: '8px 18px',
          }}
          onClick={() => handleButtonClick(1)}
        >
          <Typography variant="b16" color={'white'}>
            1번
          </Typography>
        </Button>
        <Button
          width="100%"
          sx={{
            backgroundColor: selectedButton === 2 ? 'blue' : 'grey',
            borderRadius: '6px',
            padding: '8px 18px',
          }}
          onClick={() => handleButtonClick(2)}
        >
          <Typography variant="b16" color={'white'}>
            2번
          </Typography>
        </Button>
        <Button
          width="100%"
          sx={{
            backgroundColor: selectedButton === 3 ? 'blue' : 'grey',
            borderRadius: '6px',
            padding: '8px 18px',
          }}
          onClick={() => handleButtonClick(3)}
        >
          <Typography variant="b16" color={'white'}>
            3번
          </Typography>
        </Button>
        <Button
          width="100%"
          sx={{
            backgroundColor: selectedButton === 4 ? 'blue' : 'grey',
            borderRadius: '6px',
            padding: '8px 18px',
          }}
          onClick={() => handleButtonClick(4)}
        >
          <Typography variant="b16" color={'white'}>
            4번
          </Typography>
        </Button> */}
        {/* ----------------------------------------------- */}
        {[1, 2, 3, 4].map((buttonIndex) => (
          <Button
            key={buttonIndex}
            onClick={() => handleButtonClick(buttonIndex)}
            sx={{
              backgroundColor: selectedButton === buttonIndex ? 'blue' : 'grey',
              borderRadius: '6px',
              padding: '8px 18px',
              width: '100%',
            }}
          >
            <Typography variant="b16" color={'white'}>
              {buttonIndex}번
            </Typography>
          </Button>
        ))}
      </Grid>
    </ToggleButtonGroup>
  );
};

export default ButtonGroup;
