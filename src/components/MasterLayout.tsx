import Container from "@mui/material/Container";
import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";


export default function MasterLayout(): JSX.Element {
  return (
    <>
      <Navbar title="Shane Davenport" />

      <Container>
        <Outlet />
      </Container>
    </>
  );
}