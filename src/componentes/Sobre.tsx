import React from "react";

export const Sobre = () => {
  return (
    <>
      <section className="sobre container">
        <h2>
          <span className="detalhe-sobre">#</span> Sobre o site
        </h2>
        <p>
          Este site é totalmente completo. Com tecnologias de{" "}
          <span className="detalhe-sobre">
            <strong>front-end</strong>
          </span>{" "}
          (parte visual/interativa) e{" "}
          <span className="detalhe-sobre">
            <strong>back-end</strong>
          </span>
          (interação com banco de dados)
        </p>
        <div className="cards">
          <div className="card-frontend">
            <h3>
              <strong>Frontend: </strong>
            </h3>
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>JavaScript</li>
              <li>Sass</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Node</li>
              <li>Npm</li>
              <li>Webpack</li>
              <li>Babel</li>
            </ul>
          </div>
          <div className="card-backend">
            <h3>
              <strong>Backend:</strong>{" "}
            </h3>
            <ul>
              <li>Node</li>
              <li>JavaScript</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="card-backend">
            <h3>
              <strong>Hospedagem:</strong>
            </h3>
            <ul>
              <li>GitHub</li>
              <li>Railway</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
