import React from "react";
import { useRef } from "react";

export const Desenvolvedor = () => {
  const meuElementoRef: any = useRef(null);
  const numeros = document.getElementsByClassName("desenvolvedor-detalhe num");
  React.useEffect(() => {
    for (let i = 0; i < numeros.length; i++) {
      const numeroFinal = +numeros[i].innerText;
      let numeroInicial = 0;
      const timer = setInterval(() => {
        numeroInicial++;
        if (numeros[i]) {
          numeros[i].innerText = numeroInicial;
          if (numeroInicial > numeroFinal) {
            numeros[i].innerText = numeroFinal;
            clearInterval(timer);
          }
        }
      }, 25);
    }
    const dataAtual = new Date();

    const horas = dataAtual.getHours();
    const meuHorarioInicial = 7;
    const meuHorarioFinal = 19;

    if (horas >= meuHorarioInicial && horas < meuHorarioFinal) {
      document.documentElement
        .querySelector(".disponibilidade")
        ?.classList.add("aberto");
    } else {
      if (meuElementoRef.current) {
        meuElementoRef.current.classList.add("fechado");
      }
    }
  }, []);

  return (
    <>
      <section className="desenvolvedor container">
        <h2>
          <span className="desenvolvedor-detalhe">#</span>Sobre o{" "}
          <span className="desenvolvedor-detalhe">
            <strong>desenvolvedor!</strong>
          </span>
        </h2>
        <p>
          Estou disponivel: das 7h as 19h{" "}
          <span className="disponibilidade" ref={meuElementoRef}></span>
        </p>
        <div className="desenvolvedor-informacoes">
          <div className="desenvolvedor-informacoes-grid">
            <div>
              <h1>Números</h1>
              <h3>
                Anos de experiência:{" "}
                <span className="desenvolvedor-detalhe num">2</span> anos
              </h3>
              <h3>
                Tempo de estudo:{" "}
                <span className="desenvolvedor-detalhe num">4</span> anos
              </h3>
              <h3>
                Projetos realizados:{" "}
                <span className="desenvolvedor-detalhe num">152</span>
              </h3>
              <h3>
                Horas de estudo p/semana:{" "}
                <span className="desenvolvedor-detalhe num">35</span> horas
              </h3>
              <h3 className="desenvolvedor-titulo">Detalhes</h3>{" "}
              <h3>
                Desenvolvedor:{" "}
                <span className="desenvolvedor-detalhe">Gabriel Eustaquio</span>
              </h3>
              <h3>
                Formação:{" "}
                <span className="desenvolvedor-detalhe">
                  Ciência da Computação
                </span>
              </h3>
              <h3>
                Conhecimentos:{" "}
                <span className="desenvolvedor-detalhe">
                  Frontend e Backend{" "}
                </span>
              </h3>
            </div>
            <h3 className="eu">Esse sou eu ;)</h3>
            <div className="cover">
              <img src="./dev.jpeg" alt="Gabriel Eustaquio" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
