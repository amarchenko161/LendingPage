
import './App.css';
import Description from './Components/DescriptionComponent/Description';
import Header from './Components/HeaderComponent/Header';
import TrustedCompanies from './Components/TrustedCompaniesComponent/TrustedCompanies';
import MainAdvantages from './Components/MainAdvantagesComponent/MainAdvantages';
import StoreMetrics from './Components/StoreMetricsComponent/StoreMetrics';
import ManagesTeams from './Components/ManagesTeamsComponent/ManagesTeams';

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <TrustedCompanies />
      <MainAdvantages />
      <StoreMetrics/>
      <ManagesTeams/>
    </div>
  );
}

export default App;
