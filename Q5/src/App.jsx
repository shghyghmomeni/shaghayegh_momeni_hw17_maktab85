import "./App.css";
import ClassHello from "./components/ClassHello";
import FunctionalHello from "./components/FunctionalHello";

function App() {
  return (
    <div className="App">
      <FunctionalHello />
      <ClassHello />
    </div>
  );
}

export default App;
