import React from "react";
import { Link } from "react-router-dom";

export const Inicio = () => {
  const elementos = document.getElementsByClassName("anima");
  const metadeTela = window.innerHeight * 0.8;
  function handleScroll() {
    for (let i = 0; i < elementos.length; i++) {
      const animaTop = elementos[i].getBoundingClientRect().top;
      const animaVisivel = animaTop - metadeTela < 0;
      if (i % 2 === 0) {
        if (animaVisivel) {
          elementos[i].classList.add("left");
        }
      } else {
        if (animaVisivel) {
          elementos[i].classList.add("left");
        }
      }
    }
  }

  const handleScrollTopo = () => {
    const topo = document.getElementById("topo");
    const topoTop = topo?.getBoundingClientRect().top < 100;
    const topoIcone = document.getElementById("topoIcone");
    const irTopo = document.getElementById("irTopo");
    function handleTopo() {
      const cima = document.getElementById("cima");
      cima?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "end",
      });
    }
    if (topoTop) {
      console.log("Isso");
      if (!topoIcone?.classList.contains("visivelTopo")) {
        topoIcone?.classList.add("visivelTopo");
        irTopo?.addEventListener("click", handleTopo);
      }
    } else {
      irTopo?.removeEventListener("click", handleTopo);
      topoIcone?.classList.remove("visivelTopo");
    }
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("scroll", handleScrollTopo);

  const handleRedes = () => {
    const modal = document.getElementById("modal-container");
    console.log(modal);
    if (modal) {
      modal.classList.add("visivel");
    }
  };

  const handleFechar = () => {
    const modal = document.getElementById("modal-container");
    if (modal) {
      modal.classList.remove("visivel");
    }
  };

  return (
    <>
      <div className="modal-container" id="modal-container">
        <div>
          <button className="fechar" onClick={handleFechar}>
            Fechar
          </button>
          <h3>
            <span>#</span> Redes
          </h3>
          <a href="https://github.com/gabriel-eustaquio">👉GitHub</a>
          <a href="https://api.whatsapp.com/send?phone=5521980693443&text=Oie,+quero+um+site+igual+a+esse.+Qual+seria+o+orçamento+?">
            👉Whatsapp
          </a>
        </div>
      </div>
      <main className="container">
        <div className="topo" id="topoIcone">
          <h1 id="irTopo">👆</h1>
        </div>
        <section className="anima left">
          <h2 className="titulo" id="cima">
            Oi, meu nome é Gabriel Eustáquio.
          </h2>
          <p className="subtitulo">
            Interface bem limpa e intuitiva para o usuário.
          </p>
          <div>
            <button className="btn-redes" id="topo" onClick={handleRedes}>
              Minhas Redes
            </button>
          </div>
        </section>
      </main>
      <div className="apresentacao">
        <section className="container anima">
          <h2>Gerenciamento de listas & praticidade.</h2>
          <p>Continue navegando no site para entender melhor.</p>
        </section>
      </div>
      <div className="conteudo container">
        <div className="anima">
          <h3>Como iniciar ?</h3>
          <p>
            Crie uma conta aqui no site e, após isso, faça login com sua conta.
            Assim, você poderá armazenar suas informações.
          </p>
          <Link to="/cadastro" className="btn-cadastro">
            Clique aqui para se cadastrar
          </Link>
        </div>
        <div className="anima">
          <h3>Praticidade</h3>
          <p>Suas informações estarão armazenadas no seu navegador.</p>
        </div>
      </div>
    </>
  );
};
