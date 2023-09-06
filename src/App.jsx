import Header from './componentes/Header';
import MiApi from './componentes/MiApi/MiApi';
import Footer from './componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <MiApi />
      </main>
      <Footer />
    </>
  );
}

export default App;
