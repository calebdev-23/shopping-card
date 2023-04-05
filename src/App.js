
import './App.scss';
import {Header, Footer} from "./component"
import {AllRoutes} from "./Route/AllRoutes";

function App() {
  return (
    <>
        <Header/>
        <div className={"container main"}>
            <AllRoutes/>
        </div>
        <Footer/>
    </>
  );
}

export default App;
