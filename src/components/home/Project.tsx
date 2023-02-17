import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Unstable_Grid2';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import GitHubIcon from '@mui/icons-material/GitHub';
import BuildIcon from '@mui/icons-material/Build';

import Skeleton from '@mui/material/Skeleton';
import Popover from '@mui/material/Popover';
import Paper from '@mui/material/Paper';

import { SvgIconComponent } from "@mui/icons-material";


type IngredientProps = {
  label?: string;
  icon?: SvgIconComponent;
  iconSrc?: string;
  color?: string;
};

type IngredientState = {
  anchorEl: HTMLElement | null;
};

export class Ingredient extends React.Component<IngredientProps> {
  public state: IngredientState = { anchorEl: null };

  constructor(props: IngredientProps) {
    super(props);

    this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
    this.handlePopoverClose = this.handlePopoverClose.bind(this);
  }

  private handlePopoverOpen(event: React.MouseEvent<HTMLElement>): void {
    this.setState({ anchorEl: event.currentTarget });
  };

  private handlePopoverClose(): void {
    this.setState({ anchorEl: null });
  };

  public render(): JSX.Element {
    const open: boolean = Boolean(this.props.label && this.state.anchorEl);

    return (
      <>
        <Box onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose}>
          {
            this.props.icon
              ? <this.props.icon sx={{ color: this.props.color || 'gray', height: 32, width: 32 }} />
              : this.props.iconSrc
                ? <img alt={`${this.props.label || 'Ingredient'} thumbnail`} src={this.props.iconSrc} height={26} />
                : this.props.label
                  ? <Typography sx={{ cursor: 'default', color: this.props.color || 'default' }}>{this.props.label}</Typography>
                  : <Skeleton variant="rounded" width={32} height={32} />
          }
        </Box>

        <Popover id="mouse-over-popover" anchorEl={this.state.anchorEl} open={open} sx={{
            pointerEvents: 'none',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={this.handlePopoverClose}
          disableRestoreFocus>
          <Typography sx={{ p: 1 }}>
            {this.props.label}
          </Typography>
        </Popover>
      </>
    );
  }
}

type ProjectProps = {
  title?: string;
  inProgress?: boolean;
  imgSrc?: string;
  ingredients?: JSX.Element[];
  children?: string;
  demoLink?: string;
  codeLink?: string;
  packageLink?: string;
};

export default class Project extends React.Component<ProjectProps> {
  public render(): JSX.Element {
    return (
      <Grid container spacing={5} mb={5}>
        <Grid xs={12} sm={7} md={5}>
          {
            this.props.imgSrc
              ? <Paper elevation={3} sx={{
                width: '100%',
                height: '100%',
                minHeight: 200,
                backgroundImage: `url("${this.props.imgSrc}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }} />
              : <Skeleton variant="rounded" height="100%" sx={{ minHeight: 200 }} />
          }
        </Grid>

        <Grid xs={12} sm={5} md={7}>
          <Stack direction="column" spacing={1}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" id="projects">
              <Typography variant="h5">
                {this.props.title || <Skeleton variant="text" />}
              </Typography>

              {
                this.props.inProgress
                  ? <Typography variant="subtitle2">In Progress</Typography>
                  : <></>
              }
            </Stack>

            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography variant="h6">Made With: </Typography>

              {
                this.props.ingredients || <>
                  <Ingredient />
                  <Ingredient />
                  <Ingredient />
                </>
              }
            </Stack>

            <Typography variant="body1">
              {
                this.props.children || <>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" sx={{ width: '60%' }} />
                </>
              }
            </Typography>

            <Stack direction="row" spacing={2} marginY={2}>
              {
                this.props.codeLink
                  ? <Button variant="contained" color="secondary" startIcon={<GitHubIcon />} href={this.props.codeLink} target="_blank">Code</Button>
                  : <></>
              }
              {
                this.props.demoLink
                  ? <Button variant="outlined" color="secondary" startIcon={<PlayArrowIcon />} href={this.props.demoLink} target="_blank">Demo</Button>
                  : <></>
              }
              {
                this.props.packageLink
                  ? <Button variant="outlined" color="secondary" startIcon={<BuildIcon />} href={this.props.packageLink} target="_blank">Package</Button>
                  : <></>
              }
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    );
  }
}