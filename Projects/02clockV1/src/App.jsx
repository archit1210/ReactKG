import Subheading from "./Components/Subheading";
import MainHeading from "./Components/MainHeading";
import CurrentTime from "./Components/CurrentTime";
import "./App.css";
function App() {
  return (
    <center>
      <div className="mainContainer">
        <MainHeading />
        <Subheading />
        <CurrentTime />
      </div>
    </center>
  );
}

export default App;
