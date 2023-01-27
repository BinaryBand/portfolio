import Container from "@mui/material/Container";
import Navbar, { TabData } from "./Navbar";

import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';

import { Outlet, useLocation } from "react-router-dom";


const TABS: TabData[] = [
  { title: 'RESUME', link: '/resume', icon: <ArticleIcon /> },
  { title: 'SETTINGS', link: '/settings', icon: <SettingsIcon /> },
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