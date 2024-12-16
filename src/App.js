import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderSection   from './components/HeaderSection/HeaderSection';
import { HeroSection, StaticBanner } from './components/HeroSection/HeroSection';


function App() {
  return (
    <div className="App">
        <HeaderSection />
        <HeroSection />
        <StaticBanner />
    </div>
  );
}

export default App;
