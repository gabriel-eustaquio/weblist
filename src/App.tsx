import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./componentes/Header.tsx";
import { Inicio } from "./componentes/Inicio.tsx";
import { Sobre } from "./componentes/Sobre.tsx";
import { Desenvolvedor } from "./componentes/Desenvolvedor.tsx";
import { Login } from "./componentes/Login.tsx";
import { Cadastro } from "./componentes/Cadastro.tsx";
import { Perfil } from "./componentes/Perfil.tsx";
import { Footer } from "./componentes/Footer.tsx";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Protegido from "./componentes/Protegido.tsx";

const elemento = document.querySelector("#root");
if (elemento) {
  const raiz = ReactDOM.createRoot(elemento);
  raiz.render(<MeuElemento />);
}

function MeuElemento() {
  const [login, setLogin] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    console.log("Alterou");
  }, [login]);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/desenvolvedor" element={<Desenvolvedor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/perfil"
          element={
            <Protegido>
              <Perfil alterarLogin={setLogin} />
            </Protegido>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
