import React from "react";

import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import ResumePage from "./pages/ResumePage";
import MasterLayout from "./components/MasterLayout";
import { TabData } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Location, useLocation } from "react-router-dom";

import SchoolIcon from '@mui/icons-material/School';
import HandymanIcon from '@mui/icons-material/Handyman';
import ArticleIcon from '@mui/icons-material/Article';


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
  { title: 'Education', link: '/#education', icon: SchoolIcon },
  { title: 'Tech Skills', link: '/#tech_skills', icon: HandymanIcon },
  { title: 'Resume', link: '/resume', icon: ArticleIcon },
];

export default function App(): JSX.Element {
  return (
    <Router>
      <ScrollWrapper>
        <Routes>
          <Route index element={<HomePage tabs={TABS} />} />

          <Route path="/" element={<MasterLayout tabs={TABS} />}>
            <Route path="resume" element={<ResumePage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </ScrollWrapper>
    </Router>
  );
}