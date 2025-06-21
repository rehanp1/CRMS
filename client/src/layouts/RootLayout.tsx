import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <section className="flex h-full flex-1 flex-col">
        <div>MobileNavigation </div>
        <div>Header </div>
        <div className="main-content">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default RootLayout;
