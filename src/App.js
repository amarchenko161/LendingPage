
import './App.css';
import Description from './Components/DescriptionComponent/Description';
import Header from './Components/HeaderComponent/Header';
import TrustedCompanies from './Components/TrustedCompaniesComponent/TrustedCompanies';

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <TrustedCompanies />
    </div>
  );
}

export default App;
