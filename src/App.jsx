import { BrowserRouter as Router } from "react-router-dom";
import Routeur from "./router/Routeur";

function App() {
  return (
    <Router>
      <div className={`conteneur bloc-12 bloc-myn-5`} >
        <Routeur />
      </div>

   
    </Router>
  );
}

export default App;
