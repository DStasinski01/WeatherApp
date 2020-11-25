import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import Loading from "./UI/Loader";
import About from "./pages/About";
import DataInfo from "./pages/DataInfo";
import { useWeatherState } from "./context";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  const { loading } = useWeatherState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/data">
          <DataInfo />
        </Route>
        <Route path="/:location">
          <Dashboard />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
