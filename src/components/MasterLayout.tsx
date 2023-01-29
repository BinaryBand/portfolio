import Navbar, { TabData } from "./Navbar";

import Container from "@mui/material/Container";
import SchoolIcon from '@mui/icons-material/School';
import HandymanIcon from '@mui/icons-material/Handyman';
import ArticleIcon from '@mui/icons-material/Article';

import { Outlet, useLocation } from "react-router-dom";


const TABS: TabData[] = [
  { title: 'Education', link: '/', icon: SchoolIcon },
  { title: 'Tech Skills', link: '/', icon: HandymanIcon },
  { title: 'Resume', link: '/resume', icon: ArticleIcon },
];

export default function MasterLayout(): JSX.Element {
  const path = useLocation();

  return (
    <>
      <Navbar title="Shane Davenport" tabs={TABS} currentPath={path.pathname} />

      <Container className="App">
        <Outlet />
      </Container>
    </>
  );
}