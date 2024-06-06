import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Colecoes from './pages/Colecoes';
import Fotoparacompra from './pages/Fotoparacompra';
import Carrinhodecompras from './pages/Carrinhodecompras';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Search1 from './components/Search1';
import Thanks from './components/Thanks';
import NotFound from './components/NotFound';


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colecoes" element={<Colecoes />} />
        <Route path="/fotoparacompra" element={<Fotoparacompra />} />
        <Route path="/carrinhodecompras" element={<Carrinhodecompras />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/header" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search1" element={<Search1 />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;





// // src/routes.jsx
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {Home} from './pages/Home';
// import {Colecoes} from './pages/Colecoes';
// import {FotoParaCompra} from './pages/Fotoparacompra';
// import {Login} from './components/Login';
// import {Thanks} from './components/Thanks';
// import {Carrinhodecompras} from './pages/Carrinhodecompras';

// function AppRoutes() {
//     return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} >   </Route>
//         <Route path="/colecoes" element={<Colecoes />}>   </Route>
//         <Route path="/fotoparacompra" element={<FotoParaCompra />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/thanks" element={<Thanks />} />
//         <Route path="/carrinhodecompras" element={<Carrinhodecompras />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRoutes;
