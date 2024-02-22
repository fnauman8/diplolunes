import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />
        <BrowserRouter>

        <Nav/>
        <Routes>

          <Route path='/' element={<HomePage/>} />
          <Route path='nosotros' element={<NosotrosPage/>} />
          <Route path='novedades' element={<NovedadesPage/>}/>
          <Route path='contacto' element={<ContactoPage/>}/>
        </Routes>

        
        
        </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
