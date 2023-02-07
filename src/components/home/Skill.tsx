import React from "react";

import Grid from '@mui/material/Unstable_Grid2';
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/icons-material/Code";
import { SvgIconComponent } from "@mui/icons-material";


type SkillProps = {
  title: string;
  icon?: SvgIconComponent;
  iconSrc?: string;
  color?: string;
};

export default class Skill extends React.Component<SkillProps> {
  public render(): JSX.Element {
    return (
      <Grid xs={6} sm={4} md={3}>
        <Paper sx={{ height: 180 }}>
          <Stack direction="column" alignItems="center" justifyContent="space-between" paddingY={1}>
            {
              this.props.icon
                ? <SvgIcon component={this.props.icon} sx={{ fontSize: 64, color: this.props.color || 'default' }} />
                : this.props.iconSrc
                  ? <img alt={`${this.props.title || 'Skill'} thumbnail`} src={this.props.iconSrc} height={64} />
                  : <Typography sx={{ cursor: 'default', color: this.props.color || 'default' }}>{this.props.title}</Typography>
            }

            <Typography variant="h5" my={3} sx={{ textAlign: 'center' }}>
              {this.props.title}
            </Typography>
          </Stack>
        </Paper>
      </Grid>
    );
  }
}