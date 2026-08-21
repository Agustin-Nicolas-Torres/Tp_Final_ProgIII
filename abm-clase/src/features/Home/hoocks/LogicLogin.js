import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../app/router/routes";
import TopBar from "../components/topbar";

export default function InicialLog() {
  const navigate = useNavigate();
  function log() {
    navigate(ROUTES.LOGIN);
  }
  return <TopBar accessLogin={log} isAdmin={false} />;
}
