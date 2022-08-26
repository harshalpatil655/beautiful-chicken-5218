import "./App.css";
import {Navbar} from "./Components/Navbar";
import MainRoute from "./Pages/MainRoute";
import Shopping from "./Pages/Shopping";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoute />
      <hr />
     <Footer />
    </div>
  );
}

export default App;
