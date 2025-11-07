import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const AppLayout = () => {
  return (
    <main className="min-h-screen flex flex-col items-center max-w-7xl px-3 py-2">
      <Navbar />
      <div className="my-5 w-full">
        <Outlet />
      </div>
    </main>
  );
};

export default AppLayout;
