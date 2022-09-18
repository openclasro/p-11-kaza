


import { Route, Routes , BrowserRouter  } from 'react-router-dom';

import Home from "./pages/home/Home";
import Logement from "./pages/logement/Logement";
import Page404 from "./pages/404/Page404";
import Apropos from './pages/apropos/Apropos';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes >
    <Route path="/" element={<Home />} />
    <Route path="/a-propos" element={<Apropos />} />
    <Route path="/location/:id" element={<Logement />} />
    <Route path="*" element={<Page404/>} />
    </Routes >
    <Footer/>

  </BrowserRouter>
  );
}

export default App;
