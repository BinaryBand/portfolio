import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from "react-router-dom";


type NavbarProps = {
  title?: string;
};

type NavbarState = {
  isDrawerOpen: boolean;
};

export default class Navbar extends React.Component<NavbarProps> {
  private title: string;

  public state: NavbarState = {
    isDrawerOpen: false,
  };

  constructor(props: NavbarProps) {
    super(props);

    this.title = props.title?.toUpperCase() || 'HOMEPAGE';

    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  private openDrawer(): void {
    this.setState({ isDrawerOpen: true });
  }

  private closeDrawer(): void {
    this.setState({ isDrawerOpen: false });
  }

  public render(): JSX.Element {
    return (
      <>
        <AppBar position="static">
          <Container>
            <Stack alignItems="center" direction="row" spacing={2} paddingY={1}>
              <IconButton aria-label="open drawer" color="inherit" onClick={this.openDrawer} sx={{ ml: 0, pl: 0 }}>
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" component={Link} to="/" sx={{
                display: { xs: 'none', md: 'flex' },
                fontWeight: 600,
                color: 'inherit',
                textDecoration: 'none',
              }}>
                {this.title}
              </Typography>
            </Stack>
          </Container>
        </AppBar>

        <Drawer open={this.state.isDrawerOpen}>
          <IconButton aria-label="close drawer" color="inherit" sx={{ mr: 2 }} onClick={this.closeDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Drawer>
      </>
    );
  }
}