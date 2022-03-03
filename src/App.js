import './App.css';

import LeftSidebar from './components/LeftSidebar';
import Topbar from './components/Topbar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <div className="TopbarMainContent">
        <Topbar />
        <div className="RightSidebarMainContent">
          <MainContent />
          <RightSidebar />
        </div>      
      </div>  
    </div>
  );
}

export default App;
