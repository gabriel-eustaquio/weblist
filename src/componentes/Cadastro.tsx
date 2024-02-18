import React from "react";
import { useNavigate } from "react-router";

export const Cadastro = () => {
  const navigate = useNavigate();
  function inscreverUsuario(evento: React.MouseEvent) {
    evento.preventDefault();
    const nome = document.querySelector("#nome")?.value;
    const email = document.querySelector("#email")?.value;
    const senha = document.querySelector("#senha")?.value;
    const data = document.querySelector("#data")?.value;

    if (nome == "" || email == "" || senha == "" || data == "") {
      alert("informe todos os dados");
    } else {
      const dados = {
        nome,
        email,
        senha,
        data,
      };
      const dadosEmail = {
        email,
      };
      const emailJson = JSON.stringify(dadosEmail);
      const dadosJson = JSON.stringify(dados);
      fetch("https://backend-production-e135.up.railway.app/findCustomer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: emailJson,
      })
        .then((responseDados) => {
          return responseDados.json();
        })
        .then((json) => {
          if (!json.length) {
            fetch(
              "https://backend-production-e135.up.railway.app/insertCustomer",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                },
                body: dadosJson,
              }
            );
            alert("Conta criada com sucesso");
            localStorage.nome = nome;
            // localStorage.email = json[0].email;
            navigate("/login");
          } else {
            alert("Email ja cadastrado");
          }
        });
    }
  }
  return (
    <>
      <section className="container">
        <form>
          <h2>Inscreva-se</h2>
          <label htmlFor="nome">Nome e Sobrenome</label>
          <input type="text" name="nome" id="nome" />
          <label htmlFor="data">Data de nascimento</label>
          <input type="date" name="data" id="data" />
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="exemplo@gmail.com"
          />
          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" id="senha" />
          <button onClick={inscreverUsuario}>Criar conta</button>
        </form>
      </section>
    </>
  );
};
