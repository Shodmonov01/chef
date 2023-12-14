// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Main from "./Pages/Main/Main";
import Shop from "./Pages/Shop/Shop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
