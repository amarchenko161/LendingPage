
import './App.css';
import Description from './Components/DescriptionComponent/Description';
import Header from './Components/HeaderComponent/Header';
import TrustedCompanies from './Components/TrustedCompaniesComponent/TrustedCompanies';
import MainAdvantages from './Components/MainAdvantagesComponent/MainAdvantages';

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <TrustedCompanies />
      <MainAdvantages />
    </div>
  );
}

export default App;
