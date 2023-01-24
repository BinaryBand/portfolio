import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
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

    this.title = props.title || 'Homepage';

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
        <AppBar>
          <Container>
            <Toolbar>
              <IconButton aria-label="open drawer" color="inherit" sx={{ mr: 2 }} onClick={this.openDrawer}>
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" component={Link} to="/" sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 600,
                color: 'inherit',
                textDecoration: 'none',
              }}>
                {this.title}
              </Typography>
            </Toolbar>
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