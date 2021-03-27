import './css/App.css';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';

function App() {
  return (
    <>
      <div className="global__app">

      {/* Header */}
      <Header />
      {/* Sidebar Left */}

      <SidebarLeft />
      {/* MainBody */}
      
        {/* Sidebar Right */}
      <SidebarRight />
      </div>

    </>
  );
}

export default App;
