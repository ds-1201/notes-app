// import Home from "./components/home/Home";
import NotesView from "./components/notesView/NotesView";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="sidebar-box">
        <Sidebar />
      </div>
      <div className="main-box">
        {/* <Home /> */}
        <NotesView />
      </div>
    </div>
  );
}

export default App;
