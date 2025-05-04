import { Outlet } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <div className="bg-white text-black flex flex-col justify-between min-h-[100vh] min-w-[100vw] overflow-x-hidden">
      <div className="header">
        <Header></Header>
        <div className="pt-[70px]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer className="footer-class"></Footer>
    </div>
  );
};

export default App;
