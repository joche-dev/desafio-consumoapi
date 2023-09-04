import MiApi from './componentes/MiApi';
import Buscador from './componentes/Buscador';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';

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
