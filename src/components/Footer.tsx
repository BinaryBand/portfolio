import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default class Footer extends React.Component {
  public render(): JSX.Element {
    return (
      <Box sx={{
        transition: '0.3s',
        boxShadow: 3,
        width: '100%',
        marginTop: 5,
        paddingY: 5,
        backgroundColor: '#181a1b',
        color: 'white',
      }}>
        <Container>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">
              Shane Davenport
            </Typography>
            <Stack direction="row">
              <IconButton href="https://www.linkedin.com/in/shane-m-davenport/" target="_blank" color="inherit">
                <LinkedInIcon sx={{ fontSize: 42 }} />
              </IconButton>
              <IconButton href="https://github.com/BinaryBand/" target="_blank" color="inherit">
                <GitHubIcon sx={{ fontSize: 42 }} />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
  );
  }
}