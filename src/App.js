import { useEffect, lazy,Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Loading from "./UI/Loader";
import { useWeatherState } from "./context";
import { useLocation } from "react-router-dom";
const Dashboard = lazy(()=>import("./pages/Dashboard"));
const DataInfo = lazy(()=>import("./pages/DataInfo"));
const About = lazy(()=>import("./pages/About"));

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
        <Suspense fallback={<Loading/>}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" render={(props)=><About {...props}/>}/>
        <Route path="/data" render={(props=><DataInfo {...props}/>)}/>
        <Route path="/:location" render={(props)=><Dashboard {...props}/>}/>
      </Switch>
        </Suspense>
      <Footer />
    </>
  );
}

export default App;
