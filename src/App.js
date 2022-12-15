
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import FirstPageContent from './Components/FirstPageContent/FirstPageContent';


function App() {
  return (
    <div className="App">
      <div className='first_container'>
        <Header />
        <FirstPageContent />
        <Footer />
      </div>

    </div>
  );
}

export default App;
