import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [login, setLogin] = React.useState(false);

  React.useEffect(() => {
    console.log("Renderizou novamente");
  }, [login]);

  const toggleMenu = () => {
    setOpen(true);
    open ? setOpen(false) : setOpen(true);
  };

  const fecharMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="container">
        <h1>WebList</h1>
        <nav className={open ? "toggleMenu" : ""}>
          <button onClick={toggleMenu}>
            <span></span>
          </button>
          <ul>
            <li onClick={fecharMenu}>
              <Link to="/">Inicio</Link>
            </li>
            <li onClick={fecharMenu}>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li onClick={fecharMenu}>
              <Link to="/desenvolvedor">Quem desenvolveu ?</Link>
            </li>
            {localStorage.usuarioAutenticado ? (
              ""
            ) : (
              <li className="meuPerfil" onClick={fecharMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                <Link to="/login">Entrar</Link>
              </li>
            )}
            {localStorage.usuarioAutenticado ? (
              ""
            ) : (
              <li className="meuPerfil" onClick={fecharMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-add"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                </svg>
                <Link to="/cadastro">Criar Conta</Link>
              </li>
            )}
            {localStorage.usuarioAutenticado ? (
              <li className="meuPerfil" onClick={fecharMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-check-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"
                  />
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <Link to="/perfil">Meu perfil</Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};
