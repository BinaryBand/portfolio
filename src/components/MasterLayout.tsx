import { Outlet, Location, useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import Navbar, { TabData } from "./Navbar";
import Footer from "./Footer";


type MasterLayoutProps = {
  tabs: TabData[];
};

export default function MasterLayout(props: MasterLayoutProps): JSX.Element {
  const location: Location = useLocation();

  return (
    <>
      <Navbar title="Shane Davenport" tabs={props.tabs} currentPath={location.pathname} />

      <Container className="App">
        <Outlet />
      </Container>

      <Footer />
    </>
  );
}