import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import ResumePage from "./pages/ResumePage";
import MasterLayout from "./components/MasterLayout";
import { TabData } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SchoolIcon from '@mui/icons-material/School';
import HandymanIcon from '@mui/icons-material/Handyman';
import ArticleIcon from '@mui/icons-material/Article';


function scrollToTop() {
  window.scrollTo({ top: 0 });
};

// TODO: There has to be a better solution for this.
function scrollTo(id: string): void {
  window.setTimeout((): void => {
    const target = document.getElementById(id);
    if (window && target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - 72,
        behavior: "smooth"
      });
    }
  }, 30);
}

const TABS: TabData[] = [
  { title: 'Education', link: '/', onClick: () => scrollTo('education'), icon: SchoolIcon },
  { title: 'Tech Skills', link: '/', onClick: () => scrollTo('tech_skills'), icon: HandymanIcon },
  { title: 'Resume', link: '/resume', onClick: scrollToTop, icon: ArticleIcon },
];

export default function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage tabs={TABS} />} />

        <Route path="/" element={<MasterLayout tabs={TABS} />}>
          <Route path="resume" element={<ResumePage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}