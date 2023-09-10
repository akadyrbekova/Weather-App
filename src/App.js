import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import SideBarMore from "./components/SideBarMore/SideBarMore";

function App() {
  return (
    <div className="App col-md-12 col-sm-12 row d-flex">
      <SideBar />
      <SideBarMore />
    </div>
  );
}

export default App;
