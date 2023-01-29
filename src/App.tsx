import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import ResumePage from "./pages/ResumePage";
import MasterLayout from "./components/MasterLayout";
import { TabData } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SchoolIcon from '@mui/icons-material/School';
import HandymanIcon from '@mui/icons-material/Handyman';
import ArticleIcon from '@mui/icons-material/Article';


const TABS: TabData[] = [
  { title: 'Education', link: '/#education', icon: SchoolIcon },
  { title: 'Tech Skills', link: '/#tech_skills', icon: HandymanIcon },
  { title: 'Resume', link: '/resume', icon: ArticleIcon },
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