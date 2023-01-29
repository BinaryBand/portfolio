import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";

import '../styles/home.css';


type EducationCardProps = {
  image: string;
};

function EducationCard(props: EducationCardProps): JSX.Element {
  return (
    <Card elevation={3}>
      <CardMedia component="img" height="194" image={props.image} alt="Brigham Young University — Idaho" />

      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Bachelor of Science in Software Engineering, Minor in Computer Information Technology
        </Typography>
        <Typography variant="h5" component="div">
          Brigham Young University — Idaho
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          AUGUST 2016 - MARCH 2021
        </Typography>
        <Typography variant="body2">
          Description
          <br />
          Description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default function HomePage(): JSX.Element {
  return (
    <>
      <Paper elevation={5} sx={{ marginTop: 2, backgroundColor: '#181a1b', color: 'white' }}>
        <Grid container direction="column" alignItems="center" justifyContent="center">
          <Box width={500} maxWidth="90%" paddingY={5}>
            <Typography variant="h3" mb={4}>
              Hi, I'm Shane
            </Typography>

            <Typography variant="h5" mb={4} sx={{
              textAlign: 'justify',
            }}>
              I'm currently working as a software developer at Brigham Young University — Idaho. I spend my day-to-day developing projects with TypeScript, React.js, Node.js and Google Cloud. 
            </Typography>

            <Stack direction="row" spacing={3} marginY={3} justifyContent="center">
              <Button variant="contained" size="large" startIcon={<CodeIcon />}>Projects</Button>
              <Button variant="contained" size="large" href="https://github.com/BinaryBand/" target="_blank" startIcon={<GitHubIcon />}>GitHub</Button>
            </Stack>
          </Box>
        </Grid>
      </Paper>

      <Typography variant="h4" my={4} sx={{ textDecoration: 'underline' }}>
        My Education
      </Typography>

      <Grid container spacing={2}>
        <Grid xs={12} sm={6}>
          <EducationCard image="/ClipartKey_918318.png" />
        </Grid>
        <Grid xs={12} sm={6}>
          <EducationCard image="https://www.asu.edu/modules/composer/webspark-module-asu_brand/node_modules/@asu-design-system/component-header/dist/assets/img/arizona-state-university-logo-vertical.png" />
        </Grid>
      </Grid>

      <Typography variant="h4" my={4} sx={{ textDecoration: 'underline' }}>
        My Projects
      </Typography>

      <Stack>

      </Stack>
    </>
  );
}