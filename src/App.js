import './App.css';
import Topbar  from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import MiscButtons from './components/MiscButtons/MiscButtons';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
function App() {
  return (
    <div className="App">
       <Topbar />
       <div className="container">
         <Sidebar />
         <div className="mainContainer">
           <Header />
           <MiscButtons />
           <KanbanBoard />
         </div>
       </div>
    </div>
  );
}

export default App;
