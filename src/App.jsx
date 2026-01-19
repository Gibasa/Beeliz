import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./assets/Pages/Home";
import AboutPage from "./assets/Pages/About";
import Modal from "./components/Modal";
import How from "./assets/Pages/How";

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

      <main>
        <Routes>
          {/* HOME */}
          <Route path="/" element={<HomePage />} />

          {/* QUEM SOMOS */}
          <Route path="/quem-somos" element={<AboutPage />} />

          {/* COMO FUNCIONA */}
          <Route path="/como-funciona" element={<How />} />

          {/* PARA CONDOMÍNIOS */}
          <Route
            path="/para-condominios"
            element={
              <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
                <h1 className="text-3xl font-bold">
                  Para condomínios (Em breve)
                </h1>
              </div>
            }
          />

          {/* CONTATO */}
          <Route
            path="/contato"
            element={
              <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
                <h1 className="text-3xl font-bold">
                  Página de Contato (Em breve)
                </h1>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
