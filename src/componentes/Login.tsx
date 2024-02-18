import React from "react";
import { useNavigate } from "react-router";

export const Login = (props: any) => {
  const navigate = useNavigate();
  const [mudanca, setMudanca] = React.useState(false);

  const verificarLogin = (evento: any) => {
    evento.preventDefault();
    const email = document.querySelector("#email")?.value;
    const senha = document.querySelector("#senha")?.value;
    let dados: any = {
      email,
      senha,
    };
    let dadosJson = JSON.stringify(dados);
    fetch("https://backend-production-e135.up.railway.app/findCustomer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: dadosJson,
    })
      .then((responseDados) => {
        return responseDados.json();
      })
      .then((json: any) => {
        if (json.length) {
          localStorage.nome = json[0].nome;
          localStorage.email = json[0].email;
          localStorage.usuarioAutenticado = true;
          localStorage.ajuda = true;
          setMudanca(true);
          setTimeout(() => {
            navigate("/perfil");
          }, 3000);
        } else {
          alert("Email ou senha invalida.");
        }
      });
  };

  return mudanca ? (
    <div className="meio-tela">
      <div className="loading"></div>
      <div className="loading-titulo">
        Carregando suas informações. Aguarde 3 segundos!
      </div>
    </div>
  ) : (
    <>
      <section className="container">
        <form>
          <h2>Entrar</h2>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="exemplo@gmail.com"
          />
          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" id="senha" />
          <button onClick={verificarLogin}>Acessar conta</button>
        </form>
      </section>
    </>
  );
};
