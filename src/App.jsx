// components
import Home from "./components/home/Home";
import CreateGroup from "./components/createGroup/CreateGroup";
import NotesView from "./components/notesView/NotesView";
import Sidebar from "./components/sidebar/Sidebar";

// context
import { useNotes } from "./context/notesContext/NotesContext";

function App() {
  const { selectedGroup } = useNotes();
  return (
    <div className="App">
      <div className="sidebar-box">
        <Sidebar />
      </div>
      <div className="main-box">
        {!selectedGroup ? <Home /> : <NotesView />}
      </div>
      <CreateGroup />
    </div>
  );
}

export default App;
