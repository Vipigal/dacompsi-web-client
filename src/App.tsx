import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen w-full flex flex-col gap-5 items-center justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
