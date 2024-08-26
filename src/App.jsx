// components
import Home from "./components/home/Home";
import CreateGroup from "./components/createGroup/CreateGroup";
import NotesView from "./components/notesView/NotesView";
import Sidebar from "./components/sidebar/Sidebar";

// context
import { useNotes } from "./context/notesContext/NotesContext";
import { useUI } from "./context/uiContext/UIContext";

function App() {
  const { selectedGroup } = useNotes();
  const { isMobile } = useUI();
  return (
    <div className="App">
      <div
        style={{
          display: !isMobile ? "block" : selectedGroup ? "none" : "block",
        }}
        className="sidebar-box"
      >
        <Sidebar />
      </div>
      <div
        style={{
          display: !isMobile ? "block" : selectedGroup ? "block" : "none",
        }}
        className="main-box"
      >
        {!selectedGroup ? <Home /> : <NotesView />}
      </div>
      <CreateGroup />
    </div>
  );
}

export default App;
