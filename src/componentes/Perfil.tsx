import React from "react";
import { useNavigate } from "react-router";

export const Perfil = ({ alterarLogin }: any) => {
  let [dados, setDados] = React.useState(false);
  let [evento, setEvento] = React.useState(false);

  const navigate = useNavigate();
  const dado = {
    email: localStorage.email,
  };
  const emailJson = JSON.stringify(dado);
  fetch("https://backend-production-e135.up.railway.app/findCustomer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: emailJson,
  })
    .then((responseDado) => {
      return responseDado.json();
    })
    .then((json: any) => {
      //console.log(localStorage.nome);
      alterarLogin(true);
    });
  const sairDaConta = () => {
    localStorage.removeItem("usuarioAutenticado");
    localStorage.removeItem("nome");
    alterarLogin(false);
    navigate("/");
  };

  let tarefas: any = [];

  const adicionarTarefa = () => {
    if (document.querySelector("#tarefa")?.value) {
      if (!tarefas.includes(document.querySelector("#tarefa")?.value)) {
        const tarefaArray = document.querySelector("#tarefa")?.value.split(" ");
        const tarefaJoin = tarefaArray.join("-");
        tarefas.push(tarefaJoin);
        localStorage.tarefas = JSON.stringify(tarefas);
        document.querySelector("#tarefa").value = "";
        alert("Tarefa inserida");
        setDados(true);
      } else {
        alert("Essa tarefa já foi inserida.");
      }
    } else {
      alert("Insira alguma tarefa");
    }
  };
  if (localStorage.tarefas) {
    tarefas = JSON.parse(localStorage.tarefas);
  }

  const excluirTarefa = (event: any) => {
    let resultado = window.confirm("Deseja realmente excluir essa tarefa ? ");
    if (resultado) {
      const indiceParaRemover = tarefas.indexOf(
        event.target.previousElementSibling.innerText.replace(/ /g, "-")
      );
      const indiceParaRemoverConcluida = concluidas.indexOf(
        event.target.previousElementSibling.innerText.replace(/ /g, "-")
      );
      console.log(indiceParaRemover, indiceParaRemoverConcluida);

      if (indiceParaRemover !== -1) {
        tarefas.splice(indiceParaRemover, 1);
      }

      if (indiceParaRemoverConcluida !== -1) {
        concluidas.splice(indiceParaRemoverConcluida, 1);
      }

      localStorage.tarefas = JSON.stringify(tarefas);
      localStorage.concluidas = JSON.stringify(concluidas);
      setDados(true);
    }
  };

  if (localStorage.concluidas) {
    var concluidas: any = JSON.parse(localStorage.concluidas);
  } else {
    var concluidas: any = [];
  }
  const concluirTarefa = (event: any) => {
    if (
      !concluidas.includes(
        event.target.previousElementSibling.previousElementSibling.innerText.replace(
          / /g,
          "-"
        )
      )
    ) {
      concluidas.push(
        event.target.previousElementSibling.previousElementSibling.innerText.replace(
          / /g,
          "-"
        )
      );
      event.target.previousElementSibling.previousElementSibling.classList.add(
        "concluida"
      );
      console.log(concluidas);
      localStorage.concluidas = JSON.stringify(concluidas);
      setDados(true);
    }
  };

  const desconcluirTarefa = (event: any) => {
    if (!evento) {
      const indiceParaRemoverConcluida = concluidas.indexOf(
        event.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText.replace(
          / /g,
          "-"
        )
      );

      const item = document.querySelector(
        `#${concluidas[indiceParaRemoverConcluida]}`
      );
      item?.classList.remove("concluida");
      if (indiceParaRemoverConcluida !== -1) {
        concluidas.splice(indiceParaRemoverConcluida, 1);
      }
      localStorage.concluidas = JSON.stringify(concluidas);
      setDados(true);
      console.log("Isso");
    }
  };

  const transformarId = (tarefa: any) => {
    const tarefaArray = tarefa.split(" ");
    const tarefaJoin = tarefaArray.join("-");
    return tarefaJoin;
  };

  const lengthConcluidas = (tarefasConcluidas: any) => {
    if (tarefasConcluidas) {
      const tarefasArray = JSON.parse(tarefasConcluidas);
      return tarefasArray.length;
    } else {
      return "0";
    }
  };

  React.useEffect(() => {
    setDados(false);
    if (localStorage.concluidas) {
      const concluidasFinal = JSON.parse(localStorage.concluidas);
      console.log(concluidasFinal);
      concluidasFinal.forEach((concluida: any) => {
        const item = document.querySelector(`#${concluida}`);
        console.log(item);
        if (item?.classList.contains("concluida")) {
          console.log("Já concluida");
        } else {
          item?.classList.add("concluida");
        }
      });
    }
  }, [dados]);

  return (
    <>
      <section className="container">
        <div className="dados">
          <h2>Olá {localStorage.nome} 👋</h2>
        </div>
        <button className="perfil" onClick={sairDaConta}>
          Sair
        </button>
        <h3 className="palavra"></h3>
        <div className="tarefa">
          <h3>
            Score de tarefas concluidas:{" "}
            {lengthConcluidas(localStorage.concluidas)}
          </h3>
          <label htmlFor="tarefa">Digite sua tarefa </label>
          <input type="text" id="tarefa" name="tarefa" />
          <button className="tarefa" onClick={adicionarTarefa}>
            Inserir Tarefa
          </button>
        </div>
        <div className="tarefa-resultado">
          <ul>
            {tarefas.map((tarefa: any) => {
              return (
                <>
                  <li
                    key={tarefa + 1}
                    className="tarefa-item"
                    id={transformarId(tarefa)}
                  >
                    {tarefa}
                  </li>
                  <span onClick={excluirTarefa} className="tarefa-excluir">
                    Excluir
                  </span>
                  <span onClick={concluirTarefa} className="tarefa-concluir">
                    Concluida
                  </span>
                  <span
                    onClick={desconcluirTarefa}
                    className="tarefa-desconcluir"
                  >
                    Desmarcar
                  </span>
                </>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
