import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


type HeaderProps = {
  color: string;
  backgroundColor: string;
};

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <Box sx={{
        transition: '0.3s',
        boxShadow: 3,
        width: '100%',
        paddingTop: 5,
        backgroundColor: props.backgroundColor,
        color: 'white',
      }}>
        <Container maxWidth="sm">
          <Box paddingY={7}>
            <Typography variant="h2" mb={4}>
              Hi, I'm <span style={{ color: props.color }}>Shane</span>
            </Typography>

            <Typography variant="h5" mb={4} sx={{ lineHeight: 1.5 }}>
              Computer Science Graduate from <a href="https://byui.edu/" style={{ color: props.color }}>Brigham Young University — Idaho</a> with a Passion for Machine Learning/AI, Cryptography, and Front End Development
            </Typography>

            <Stack direction="row" spacing={3} marginY={3} justifyContent="center">
              <Button variant="contained" size="large" color="secondary" startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/shane-m-davenport/" target="_blank">
                  LinkedIn
              </Button>
              <Button variant="outlined" size="large" color="secondary" startIcon={<GitHubIcon />}
                href="https://github.com/BinaryBand/" target="_blank">
                  GitHub
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Grid>
  );
}