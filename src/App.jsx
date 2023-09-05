import Header from './componentes/Header';
import Buscador from './componentes/Buscador';
import MiApi from './componentes/MiApi/MiApi';
import Footer from './componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import { useState } from 'react'

function App() {
  return (
    <>
      <Header />
      <main>
        <Buscador />
        <MiApi />
      </main>
      <Footer />
    </>
  );
}

export default App;
