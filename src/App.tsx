import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import MasterLayout from "./components/MasterLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}