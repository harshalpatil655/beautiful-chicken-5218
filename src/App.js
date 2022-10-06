import "./App.css";
import Navbar from "./Components/Navbar";
import MainRoute from "./Pages/MainRoute";

import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoute />

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
