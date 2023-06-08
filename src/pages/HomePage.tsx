import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTheme } from '@mui/material/styles';

import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import CloudIcon from '@mui/icons-material/Cloud';

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
  const theme = useTheme();
  const primaryColor: string = theme.palette.primary.main;

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

      <Header color={theme.palette.primary.light} backgroundColor={theme.palette.primary.dark} />

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
          imgSrc="https://www.kindpng.com/picc/m/159-1595848_python-logo-png-transparent-background-python-logo-png.png"
          codeLink="https://github.com/BinaryBand/crypto-pi"
          ingredients={[
            <Ingredient label="Python" iconSrc="icons/python.svg" />,
          ]}>
          Several cryptography functions written from scratch in Python including ed25519, secp256k1, sha-1, sha-256, and sha-512. This project is not designed to be used in production.
        </Project>

        <Project title="ExpressJS Backend"
          imgSrc="https://tse1.mm.bing.net/th?id=OIP.JX7HIzJM7VspdsIxjwLAKgHaFj&pid=Api"
          codeLink="https://github.com/BinaryBand/express-backend"
          ingredients={[
            <Ingredient label="TypeScript" iconSrc="icons/typescript-icon.jpeg" />,
            <Ingredient label="ExpressJS" color="#353535" />,
            <Ingredient label="HandleBarsJS" iconSrc="icons/handlebars-logo.png" />,
            <Ingredient label="Bootstrap" iconSrc="icons/bootstrap.svg" />,
            <Ingredient label="SQLite" iconSrc="icons/database-solid.svg" />,
          ]}>
          This project is a web application that allows users to create an account and authenticate using a cryptographic-generated token. The project is built using Express.js, Bootstrap, sqlite3, and Handlebars.
        </Project>

        <Project title="One-Time Password"
          imgSrc="https://www.pandasecurity.com/en/mediacenter/src/uploads/2020/12/pandasecurity-iphones-security.jpg"
          codeLink="https://github.com/BinaryBand/one-time-password"
          packageLink="https://www.npmjs.com/package/one-time-password"
          ingredients={[
            <Ingredient label="TypeScript" iconSrc="icons/typescript-icon.jpeg" />,
            <Ingredient label="Jest" iconSrc="icons/jest-logo.svg" />,
          ]}>
          Leveraging a base32 key, this library generates one-time passwords (OTP) using the Time-based One-Time Password Algorithm (TOTP) to provide robust protection against unauthorized access.
        </Project>

        <Project title="Java Game Template"
          imgSrc="images/java-game-screenshot.png"
          codeLink="https://github.com/BinaryBand/java-game"
          ingredients={[
            <Ingredient label="Java" iconSrc="icons/java.svg" />,
          ]}>
          This game template provides a starting point for creating a 2D platformer game. It features a simple player character, a scrolling camera, and basic collision detection.
        </Project>

        <Project title="Wordle Solver Bookmarklet"
          imgSrc="https://images.macrumors.com/t/zOCafmfJYd6tJf2Bju7xoICoVt8=/1200x1200/smart/article-new/2022/01/wordle.jpg"
          codeLink="https://github.com/BinaryBand/wordle-solver"
          ingredients={[
            <Ingredient label="Javascript" icon={JavascriptIcon} color="#e5a126" />,
          ]}>
          The Wordle Solver is a JavaScript bookmarklet that helps you solve the NYTimes Wordle puzzle quickly and easily. It pulls a word list from my GitHub repository and uses it to recommend the next word to try based on the present, absent, and correct letters.
        </Project>

        <Project title="Auth Flow" inProgress ingredients={[
          <Ingredient label="TypeScript" iconSrc="icons/typescript-icon.jpeg" />,
          <Ingredient label="React Native" iconSrc="icons/react.svg" />,
          <Ingredient label="Jest" iconSrc="icons/jest-logo.svg" />,
        ]} />

        <Typography variant="h4" id="education" my={4}>
          <span style={{ color: primaryColor }}>Education</span>
        </Typography>

        <Paper elevation={3} sx={{ padding: 3 }}>
          <Stack direction="row">
            <Grid container direction="row" alignItems="center" spacing={10}>
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
                <Typography variant="body2">
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

        <Grid container direction="row" alignItems="center" justifyContent="center" spacing={4}>
          <Skill title="HTML" icon={HtmlIcon} color="#e24d27" />
          <Skill title="CSS" icon={CssIcon} color="#1572b7" />
          <Skill title="JavaScript" icon={JavascriptIcon} color="#e5a126" />
          <Skill title="SQL" iconSrc="icons/database-solid.svg" />
          <Skill title="Typescript" iconSrc="icons/typescript-icon.jpeg" />
          <Skill title="React" iconSrc="icons/react.svg" />
          <Skill title="Dart" iconSrc="icons/dart-logo.svg" />
          <Skill title="Flutter" iconSrc="icons/flutter-logo.svg" />
          <Skill title="C / C++" iconSrc="icons/c++-icon.svg" />
          <Skill title="Java" iconSrc="icons/java.svg" />
          <Skill title="Python" iconSrc="icons/python.svg" />
          <Skill title="Rust" iconSrc="icons/rust.svg" />
          <Skill title="Swift" icon={AppleIcon} color="#cccccc" />
          <Skill title="Kotlin" icon={AndroidIcon} color="#1ead5f" />
          <Skill title="Git" iconSrc="icons/code-branch-solid.svg" />
          <Skill title="Google Cloud" icon={CloudIcon} color="#4088ef" />
        </Grid>
      </Container>

      <Footer />
    </>
  );
}