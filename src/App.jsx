import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Pages/Home";
import Modal from "./components/Modal";
import How from "./Pages/How";
import ForCond from "./Pages/ForCond/";
import ForCompany from "./Pages/ForCompany";
import Contact from "./Pages/Contact";
import WhatsApp from "./components/Whatsapp";
import ScrollToTop from "./components/ScrollToTop";
import BeelizPlus from "./Pages/Beeliz+";

function App() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(() => {
    return !sessionStorage.getItem("entryModalSeen");
  });

  function handleCloseModal() {
    sessionStorage.setItem("entryModalSeen", "true");
    setShowModal(false);
  }

  function handleModalAction() {
    sessionStorage.setItem("entryModalSeen", "true");
    setShowModal(false);
    navigate("/contato");
  }

  return (
    <>
    <ScrollToTop />
      {showModal && (
        <Modal onClose={handleCloseModal} onAction={handleModalAction} />
      )}

      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quem-somos" element={<HomePage />} />
          <Route path="/como-funciona" element={<How />} />
          <Route path="/para-condominios" element={<ForCond />} />
          <Route path="/para-empresas" element={<ForCompany />} />
          <Route path="/beeliz-plus" element={<BeelizPlus />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>
      <WhatsApp />

      <Footer />
    </>
  );
}

export default App;
