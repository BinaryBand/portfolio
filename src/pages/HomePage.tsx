import React from 'react';

import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Unstable_Grid2';

import DownloadIcon from '@mui/icons-material/Download';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Resume from '../components/Resume';
import ButtonGroup from '@mui/material/ButtonGroup';


const options: string[] = [
  "Save As HTML",
  "Save As PDF",
];

export default function HomePage(): JSX.Element {
  let [open, setOpen] = React.useState(false);
  let [selectedIndex, setSelectedIndex] = React.useState(0);

  let handleClick = () => {
    selectedIndex = (selectedIndex + 1) % options.length;
    setSelectedIndex(selectedIndex);
  };

  let handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Grid container spacing={2} marginY={2}>
        <Grid xs={12} md={10}>
          <Resume />
        </Grid>
        <Grid xs={2} sx={{ display: { xs: 'none', md: 'block' }}}>

          {/* TODO: Add drawer, add 'onClick' event */}
          <ButtonGroup variant="contained" aria-label="split button">
            <Button onClick={handleClick} sx={{ whiteSpace: 'nowrap' }}>
              {options[selectedIndex]}
            </Button>
            <Button size="small"
              aria-controls={open ? 'split-button-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>

        </Grid>
      </Grid>

      {/* TODO: Only appear when 'Resume' in scroll view, add 'onClick' event */}
      <Fab variant="extended" color="primary" aria-label="download" sx={{
        position: 'fixed',
        bottom: 32,
        left: '50%',
        transform: 'translate(-50%, 0)',
        display: { xs: 'block', md: 'none' },
      }}>
        <DownloadIcon sx={{ mr: 1 }} />
        Save As
      </Fab>
    </>
  );
}