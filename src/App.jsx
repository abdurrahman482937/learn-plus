import { Outlet } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Loading from "./components/loading/Loading";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  if (loading) return <Loading />;
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
