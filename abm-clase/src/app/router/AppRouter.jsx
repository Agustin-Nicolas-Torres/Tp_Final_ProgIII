import { ROUTES } from "./routes";
//import PageLoggin from "../../features/auth/page/PageLoggin"
import AuthLog from "../../features/auth/hoocks/LogicPasw";
import PageHome from "../../features/Home/page/PageHome"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<AuthLog />} />
        
        <Route path={ROUTES.HOME} element={<PageHome />} /> 
        
      </Routes>
    </Router>
  );
};