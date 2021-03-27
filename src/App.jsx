import './App.css';
import Header from './Header';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';

function App() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Sidebar Left */}
      <div className="global__app">

      <SidebarLeft />
      {/* MainBody */}
      
        {/* Sidebar Right */}
      <SidebarRight />
      </div>

    </>
  );
}

export default App;
