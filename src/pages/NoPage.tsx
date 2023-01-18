import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";


export default function NoPage(): JSX.Element {
  return (
    <Container>
      <Typography paragraph sx={{ color: 'red' }}>
        No Page Here.
      </Typography>
    </Container>
  );
}