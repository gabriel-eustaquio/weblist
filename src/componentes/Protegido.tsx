import React from "react";
import { Navigate } from "react-router-dom";

const Protegido = ({ children }: any) => {
  const autenticado = localStorage.usuarioAutenticado;

  if (autenticado) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default Protegido;
