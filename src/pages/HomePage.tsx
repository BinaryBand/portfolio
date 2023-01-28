import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';


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
              I'm currently working as a software developer at Brigham Young University — Idaho. I spend my day-to-day developing projects with TypeScript, React.js, Node.js and AWS. 
            </Typography>

            <Stack direction="row" spacing={3} marginY={3} justifyContent="center">
              <Button variant="contained" size="large" startIcon={<CodeIcon />}>Projects</Button>
              <Button variant="contained" size="large" href="https://github.com/BinaryBand/" target="_blank" startIcon={<GitHubIcon />}>GitHub</Button>
            </Stack>
          </Box>
        </Grid>
      </Paper>

      {/* <Typography variant="h3" mt={4}>
        Projects
      </Typography> */}
    </>
  );
}