import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from "react-router-dom";


type HeaderProps = {
  color: string;
  backgroundColor: string;
};

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <Box sx={{
        transition: '0.3s',
        width: '100%',
        backgroundColor: '#222' || props.backgroundColor,
        // background: 'url("https://i.pinimg.com/originals/0c/1f/74/0c1f748f5702c12423c3720d4cce4cc4.png")',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)',
      }}>
        <Container maxWidth="md">
          <Grid container>
            <Grid xs={7}>
              <Box paddingY={10}>
                <Stack spacing={3} alignItems="left">
                  <Typography variant="h1">
                    Hi, I'm <span style={{ color: '#1976d2' }}>Shane</span>
                  </Typography>

                  <Typography variant="h2">
                    Software Engineer
                  </Typography>

                  <Typography variant="body1">
                    Computer Science Graduate from <a href="https://byui.edu/" style={{ color: props.color }}>Brigham Young University — Idaho</a> with a Passion for Machine Learning/AI, Cryptography, and Front End Development
                  </Typography>

                  <Stack direction="row" spacing={4} justifyContent="start">
                    <Button variant="contained" color="secondary" component={Link} to="/#projects">
                        My Projects
                    </Button>
                    <Button variant="text" color="secondary" endIcon={<ArrowRightAltIcon />}
                      href="https://github.com/BinaryBand/" target="_blank">
                        GitHub
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Grid>
  );
}