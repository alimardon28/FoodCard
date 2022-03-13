import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import Products from './Pages/Products';

function App() {
  return (
    <div className="App">

        <Header/>
        <Home/>
        <Products/>
        <Footer/>

    </div>
  );
}

export default App;
