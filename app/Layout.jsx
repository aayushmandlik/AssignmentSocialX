import Sidebar from "./Sidebar.jsx";
import Dashboard from "../app/Dashboard/page.jsx";
const Layout = () => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Layout;
