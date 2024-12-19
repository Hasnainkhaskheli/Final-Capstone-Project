import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderSection from './components/HeaderSection/HeaderSection';
import { HeroSection, StaticBanner } from './components/HeroSection/HeroSection';
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import AccountPage from "./components/auth/AccountPage";

function App() {
  return (
   <div>
    <HeaderSection />
    <HeroSection />
    <StaticBanner />
    {/* <Register />
    <Login />
    <AccountPage /> */}
   </div>
  );
}

export default App;
