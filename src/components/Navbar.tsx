import React from 'react';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import styled from '@mui/material/styles/styled';

import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import SvgIcon from "@mui/icons-material/Code";
import { SvgIconComponent } from "@mui/icons-material";

import { Link } from "react-router-dom";


export type TabData = {
  title: string;
  link: string;
  icon: SvgIconComponent;
};

interface NavButtonProps extends TabData {
  active?: boolean;
};

class TabButton extends React.Component<NavButtonProps> {
  public render(): JSX.Element {
    return (
      <Button key={this.props.title} component={Link} to={this.props.link} startIcon={<this.props.icon />} sx={{
        fontWeight: 500,
        color: 'inherit',
        position: 'relative',

        '&:before': {
          content: "''",
          position: 'absolute',
          width: this.props.active ? '100%' : 0,
          height: '2px',
          bottom: 0,
          left: '50%',
          transform: 'translate(-50%,0%)',
          backgroundColor: 'white',
          visibility: this.props.active ? 'visible' : 'hidden',
          transition: 'all 0.1s ease-in-out',
        },

        '&:hover:before': {
          visibility: 'visible',
          width: '100%',
        },
      }}>
        {this.props.title}
      </Button>
    );
  }
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(0, 1),
  alignItems: 'center',
  justifyContent: 'space-between',
  ...theme.mixins.toolbar,
}));

type NavbarProps = {
  title: string;
  tabs?: TabData[];
  currentPath?: string;
  fixed?: boolean;
  backgroundColor?: string;
  elevation?: number;
};

type NavbarState = {
  isDrawerOpen: boolean;
};

export default class Navbar extends React.Component<NavbarProps> {
  private position: "fixed" | "static";

  public state: NavbarState = {
    isDrawerOpen: false,
  };

  constructor(props: NavbarProps) {
    super(props);

    this.position = props.fixed ? 'fixed' : 'static';

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
        <AppBar position={this.position} elevation={this.props.elevation} sx={{
          backgroundColor: this.props.backgroundColor,
          paddingY: { sm: 0, md: 1 },
        }}>
          <Container>
            <Stack alignItems="center" direction="row" justifyContent="space-between" paddingY={1}>
              <IconButton aria-label="open drawer" color="inherit" onClick={this.openDrawer} sx={{
                display: { xs: 'block', md: 'none' },
                // marginTop: 1,
              }}>
                <MenuIcon />
              </IconButton>

              <Typography noWrap variant="h6" component={Link} to="/" sx={{
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}>
                {this.props.title}
              </Typography>

              <Stack alignItems="center" direction="row" spacing={3} padding={0} sx={{
                display: { xs: 'none', md: 'block' },
              }}>
                {
                  this.props.tabs?.map((tab: TabData): JSX.Element => {
                    return (
                      <TabButton title={tab.title} link={tab.link} icon={tab.icon}
                        active={this.props.currentPath === tab.link} />
                    );
                  })
                }
              </Stack>
            </Stack>
          </Container>
        </AppBar>

        <Drawer open={this.state.isDrawerOpen} sx={{
          width: 320,
          flexShrink: 0,

          '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
          }
        }}>
          <DrawerHeader>
            <Typography variant="h6" component={Link} to="/" onClick={this.closeDrawer} sx={{
              fontWeight: 600,
              color: 'inherit',
              textDecoration: 'none',
            }}>
              {this.props.title}
            </Typography>

            <IconButton aria-label="close drawer" color="inherit" onClick={this.closeDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>

          <Divider />

          <List>
            {
              this.props.tabs?.map((tab: TabData): JSX.Element => {
                return (
                  <ListItem key={tab.title} disablePadding>
                    <ListItemButton component={Link} to={tab.link}>
                      <ListItemIcon>
                        <SvgIcon component={tab.icon} />
                      </ListItemIcon>

                      <ListItemText primary={tab.title} />
                    </ListItemButton>
                  </ListItem>
                );
              })
            }
          </List>
        </Drawer>
      </>
    );
  }
}