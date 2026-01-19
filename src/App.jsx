import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import Modal from "./components/Modal";
import How from "./Pages/How";
import ForCond from "./Pages/ForCond/";
import Contact  from "./Pages/Contact";

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
      {showModal && (
        <Modal onClose={handleCloseModal} onAction={handleModalAction} />
      )}

      <Navbar />

      <main className="min-h-screen">
        <Routes>
          {/* HOME */}
          <Route path="/" element={<HomePage />} />

          {/* QUEM SOMOS */}
          <Route path="/quem-somos" element={<AboutPage />} />

          {/* COMO FUNCIONA */}
          <Route path="/como-funciona" element={<How />} />

          {/* PARA CONDOMÍNIOS */}
          <Route path="/para-condominios" element={<ForCond />} />

          {/* CONTATO */}
          <Route
            path="/contato"
            element={
              <Contact/>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
