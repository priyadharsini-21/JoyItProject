
import './App.css';
import Header from './components/templates/Header';
import Footer from './components/templates/Footer';
import Routing from './components/route/Routing';
import { Banner } from './components/atoms';

function App() {
  return (
    <>
      <Header />
      <Banner title={"Lorem "} description={"Slash sale begins in June. Get upto 80% discount on all products"} />
      <Routing />
      <br></br>
      <Footer />
    </>
  );
}

export default App;
