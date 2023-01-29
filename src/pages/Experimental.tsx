import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useScrollTrigger from '@mui/material/useScrollTrigger';

import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import HandymanIcon from '@mui/icons-material/Handyman';
import ArticleIcon from '@mui/icons-material/Article';

import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import CloudIcon from '@mui/icons-material/Cloud';
import DataArrayIcon from '@mui/icons-material/DataArray';
import DataObjectIcon from '@mui/icons-material/DataObject';

import { TabButton } from "../components/Navbar";
import { Link } from "react-router-dom";

import { SvgIconComponent } from "@mui/icons-material";
import SvgIcon from "@mui/icons-material/Code";


type SkillProps = {
  title: string;
  icon: SvgIconComponent;
  color: string;
};

class Skill extends React.Component<SkillProps> {
  public render(): JSX.Element {
    return (
      <Grid xs={6} sm={4} md={3}>
        <Paper sx={{ height: 180 }}>
          <Stack direction="column" alignItems="center" justifyContent="space-between" paddingY={1}>
            <SvgIcon component={this.props.icon} sx={{ fontSize: 64, color: this.props.color }} />

            <Typography variant="h5" my={3} sx={{ textAlign: 'center' }}>
              {this.props.title}
            </Typography>
          </Stack>
        </Paper>
      </Grid>
    );
  }
}

// function scrollTo(id: string): void {
//   const target = document.getElementById(id);

//   if (window && target) {
//     window.scrollTo({
//       top: target.getBoundingClientRect().top + window.pageYOffset - 64,
//       behavior: "smooth"
//     });
//   }
// }

export default function Experimental(): JSX.Element {
  const primaryColor: string = '#1976d2';

  const thresholdTrigger: boolean = useScrollTrigger({
    disableHysteresis: true,
    threshold: 90,
  });
  const elevation: number = thresholdTrigger ? 5 : 0;

  // TODO: Design better scrollspy
  const target = document.getElementById('education');
  let educationTrigger: boolean = useScrollTrigger({
    disableHysteresis: true,
    threshold: target!.getBoundingClientRect().top + window.pageYOffset - 64,
  });
  const target2 = document.getElementById('tech_skills');
  let skillsTrigger: boolean = useScrollTrigger({
    disableHysteresis: true,
    threshold: target2!.getBoundingClientRect().top + window.pageYOffset - 64,
  });
  educationTrigger = skillsTrigger ? false : educationTrigger;

  // const educationTrigger = false;
  // const skillsTrigger = false;

  return (
    <>
      <AppBar elevation={elevation} sx={{
        transition: '0.1s',
        backgroundColor: thresholdTrigger ? 'primary' : 'transparent',
      }}>
        <Container>
          <Stack alignItems="center" direction="row" justifyContent="space-between" paddingY={1}>
            <Typography noWrap variant="h6" component={Link} to="/" sx={{
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}>
              Homepage
            </Typography>

            <Stack alignItems="center" direction="row" spacing={3} padding={0} sx={{
              display: { xs: 'none', md: 'block' },
            }}>
              <TabButton title={'Education'} link='#education' icon={SchoolIcon} active={educationTrigger} />
              <TabButton title={'Tech Skills'} link='#tech_skills' icon={HandymanIcon} active={skillsTrigger} />
              <TabButton title={'Resume'} link={'/resume'} icon={ArticleIcon} />
            </Stack>
          </Stack>
        </Container>
      </AppBar>

      <Grid container direction="column" alignItems="center" justifyContent="center">
        <Box sx={{
          transition: '0.3s',
          boxShadow: 3,
          maxWidth: '100%',
          width: thresholdTrigger ? 900 : '100%',
          borderRadius: {
            xs: 0,
            md: thresholdTrigger ? '5px' : 0,
          },
          paddingTop: 5,
          backgroundColor: '#181a1b',
          color: 'white',
        }}>
          <Container maxWidth="sm">
            <Box paddingY={7}>
              <Typography variant="h2" mb={4}>
                Hi, I'm <span style={{ color: primaryColor }}>Shane</span>
              </Typography>

              <Typography variant="h5" mb={4} sx={{ textAlign: 'justify' }}>
                I'm currently working as a software developer at <a href="https://byui.edu/" style={{ color: primaryColor }}>Brigham Young University — Idaho.</a> I spend my day-to-day developing projects with TypeScript, React.js, Node.js and Google Cloud. 
              </Typography>

              <Stack direction="row" spacing={3} marginY={3} justifyContent="center">
                <Button variant="contained" size="large" startIcon={<CodeIcon />}>Projects</Button>
                <Button variant="contained" size="large" href="https://github.com/BinaryBand/" target="_blank" startIcon={<GitHubIcon />}>GitHub</Button>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Grid>

      <Container maxWidth="md">
        <Typography variant="h4" my={5} id="education">
          My <span style={{ color: primaryColor }}>Education</span>
        </Typography>

        <Paper elevation={3} sx={{ padding: 3 }}>
          <Stack direction="row">
            <Grid container direction="row" alignItems="center" justifyContent="center" spacing={3}>
              <Grid xs={12} sm={5} md={4}>
                <img alt="Brigham Young University — Idaho logo" src="/images/ClipartKey_918318.png" width="100%" />
              </Grid>
              <Grid xs={12} sm={7} md={8}>
                <Typography variant="h5" component="div">
                  Brigham Young University — Idaho
                </Typography>
                <Typography variant="subtitle2">
                  AUGUST 2016 - MARCH 2021
                </Typography>
                <ul>
                  <li>Bachelor of Science in Software Engineering</li>
                  <li>Minor in Computer Information Technology</li>
                  <li>Associates of Applied Science in Computer Programming</li>
                </ul>
              </Grid>
            </Grid>
          </Stack>
        </Paper>

        <Typography variant="h4" my={5} id="tech_skills">
          Technical <span style={{ color: primaryColor }}>Skills</span>
        </Typography>

        <Grid container direction="row" alignItems="center" justifyContent="center" spacing={3}>
          <Skill title="HTML" icon={HtmlIcon} color="#e24d27" />
          <Skill title="CSS" icon={CssIcon} color="#1572b7" />
          <Skill title="JavaScript" icon={JavascriptIcon} color="#e5a126" />
          <Skill title="C++" icon={DataArrayIcon} color="#055a9d" />
          <Skill title="Java" icon={DataObjectIcon} color="#ef1e28" />
          <Skill title="Python" icon={CodeIcon} color="#ffd242" />
          <Skill title="Swift" icon={AppleIcon} color="#cccccc" />
          <Skill title="Kotlin" icon={AndroidIcon} color="#1ead5f" />
          <Skill title="Git" icon={GitHubIcon} color="#de4c36" />
          <Skill title="Google Cloud" icon={CloudIcon} color="#4088ef" />
        </Grid>
      </Container>
    </>
  );
}