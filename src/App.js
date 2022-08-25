import "./App.css";
import {Navbar} from "./Components/Navbar";
import MainRoute from "./Pages/MainRoute";
import Shopping from "./Pages/Shopping";
import TopOffers from "./Pages/TopOffers";


function App() {
  return (
    <div className="App">
      <Navbar />
      <TopOffers/>
 
    </div>
  );
}

export default App;
