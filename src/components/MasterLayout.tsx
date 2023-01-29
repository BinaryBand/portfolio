import Navbar, { TabData } from "./Navbar";
import Footer from "./Footer";

import Container from "@mui/material/Container";

import { Outlet, useLocation } from "react-router-dom";


type MasterLayoutProps = {
  tabs: TabData[],
};

export default function MasterLayout(props: MasterLayoutProps): JSX.Element {
  const path = useLocation();

  return (
    <>
      <Navbar title="Shane Davenport" tabs={props.tabs} currentPath={path.pathname} />

      <Container className="App">
        <Outlet />
      </Container>

      <Footer />
    </>
  );
}