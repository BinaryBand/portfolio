import React from "react";

import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import MasterLayout from "./components/MasterLayout";
import { TabData } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Location, useLocation } from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';

import ConstructionIcon from '@mui/icons-material/Construction';
import SchoolIcon from '@mui/icons-material/School';
import HandymanIcon from '@mui/icons-material/Handyman';
// import ArticleIcon from '@mui/icons-material/Article';


type ScrollWrapperProps = {
  children: JSX.Element;
};

// Scroll to top after clicking link.
// Scroll to anchor if one exists.
function ScrollWrapper(props: ScrollWrapperProps): JSX.Element {
  const location: Location = useLocation();

  React.useLayoutEffect((): void => {
    const anchor: string | undefined = location.hash.split('#').pop();
    const target: HTMLElement | null = anchor ? document.getElementById(anchor) : null;

    if (window && target) {
      const scrollTo: number = target.getBoundingClientRect().top + window.pageYOffset - 72;
      document.documentElement.scrollTo({top: scrollTo, behavior: 'smooth' });
    }
    else {
      document.documentElement.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location]);

  return props.children;
}

const TABS: TabData[] = [
  { title: 'Projects', link: '/#projects', icon: ConstructionIcon },
  { title: 'Education', link: '/#education', icon: SchoolIcon },
  { title: 'Tech Skills', link: '/#tech_skills', icon: HandymanIcon },
  // { title: 'Resume', link: '/resume', icon: ArticleIcon },
];

// https://m2.material.io/resources/color/#!/?view.left=0&view.right=1&primary.color=546E7A&secondary.color=33691E
const theme = createTheme({
  palette: {
    primary: {
      main: '#03589c',
      light: '#5084cd',
      dark: '#00306d',
    },
    secondary: {
      main: '#2cb7f6',
      light: '#74e9ff',
      dark: '#0087c3',
    },
  },
});

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollWrapper>
          <Routes>
            <Route index element={<HomePage tabs={TABS} />} />

            <Route path="/" element={<MasterLayout tabs={TABS} />}>
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="resume" element={<ResumePage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </ScrollWrapper>
      </Router>
    </ThemeProvider>
  );
}