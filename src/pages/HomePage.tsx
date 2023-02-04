import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useScrollTrigger from '@mui/material/useScrollTrigger';

import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import CloudIcon from '@mui/icons-material/Cloud';
import DataArrayIcon from '@mui/icons-material/DataArray';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import Navbar, { TabData } from '../components/Navbar';
import Header from '../components/home/Header';
import Project, { Ingredient } from '../components/home/Project';
import Skill from '../components/home/Skill';
import Footer from '../components/Footer';

import { Link } from "react-router-dom";


type HomePageProps = {
  tabs?: TabData[];
};

export default function HomePage(props: HomePageProps): JSX.Element {
  const primaryColor: string = '#1976d2';

  const thresholdTrigger: boolean = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  });
  const paddingY: number = thresholdTrigger ? 0 : 2;
  const elevation: number = thresholdTrigger ? 5 : 0;

  return (
    <>
      <Navbar title="Shane Davenport" fixed={true} elevation={elevation} tabs={props.tabs} paddingY={paddingY}
        backgroundColor={thresholdTrigger ? 'primary' : 'transparent'} />

      <Header color={primaryColor} />

      <Container maxWidth="md">
        <Stack direction="row" alignItems="center" justifyContent="space-between" id="projects" mt={4}>
          <Typography variant="h4">
            My <span style={{ color: primaryColor }}>Projects</span>
          </Typography>
          {/* <Button component={Link} to="/projects" variant="text" endIcon={<ArrowRightIcon />}>
            More
          </Button> */}
        </Stack>

        <Typography variant="subtitle1" mb={4}>
          Under Construction
        </Typography>

        <Project title="Crypto Pi"
          imgSrc="images/ScreenShot2023-02-04at1.02.03PM.png"
          codeLink="https://github.com/BinaryBand/crypto-pi"
          ingredients={[
            <Ingredient label="Python" icon={CodeIcon} color="#ffd242" />,
          ]}>
          Several cryptography functions written from scratch in Python including ed25519, secp256k1, sha-1, sha-256, and sha-512. This project is not designed to be used in production.
        </Project>

        <Project />
        <Project />

        <Typography variant="h4" id="education" my={4}>
          <span style={{ color: primaryColor }}>Education</span>
        </Typography>
        
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Stack direction="row">
            <Grid container direction="row" alignItems="center" spacing={3}>
              <Grid xs={12} sm={5} md={4}>
                <img alt="Brigham Young University — Idaho logo" src="images/ClipartKey_918318.png" width="100%" />
              </Grid>
              <Grid xs={12} sm={7} md={8}>
                <Typography variant="h5" component="div">
                  Brigham Young University — Idaho
                </Typography>
                <Typography variant="subtitle2" mb={3}>
                  AUGUST 2016 - MARCH 2021
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 2 }}>
                  Bachelor of Science in Software Engineering
                  <br />
                  Minor in Computer Information Technology
                  <br />
                  Associates of Applied Science in Computer Programming
                </Typography>
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

      <Footer />
    </>
  );
}