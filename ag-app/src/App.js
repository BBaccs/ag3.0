import NavBar from './NavBar';
import HeroImg from './HeroImg';
import Menu from './Menu';
import './css/custom.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroImg 
        desktopSrc={'/assets/other/desktop/ourStory2000x600.jpg'} 
        tabletSrc={'/assets/other/desktop/ourStory1024x500.jpg'} 
        src={'/assets/other/mobile/ourStory345x200.jpg'} 
      />
      <main>
        <Menu menuPage={true} />
        <Menu menuPage={false} />
      </main>
    </div>
  );
}

export default App;