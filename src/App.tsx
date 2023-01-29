import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import ResumePage from "./pages/ResumePage";
import MasterLayout from "./components/MasterLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Experimental from "./pages/Experimental";


export default function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route index element={<Experimental />} />

        <Route path="/" element={<MasterLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}