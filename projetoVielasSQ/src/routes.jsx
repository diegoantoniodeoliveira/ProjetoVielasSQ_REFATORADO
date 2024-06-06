import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Colecoes from './pages/Colecoes';
import Fotoparacompra from './pages/Fotoparacompra';
import Carrinhodecompras from './pages/Carrinhodecompras';
import Login from './components/Login';
import Thanks from './components/Thanks';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colecoes" element={<Colecoes />} />
        <Route path="/fotoparacompra" element={<Fotoparacompra />} />
        <Route path="/carrinhodecompras" element={<Carrinhodecompras />} />
        <Route path="/login" element={<Login />} />
        <Route path="/thanks" element={<Thanks />} />
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
