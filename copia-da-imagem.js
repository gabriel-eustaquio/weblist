const fs = require("fs");
const path = require("path");

const documentoOrigem = "./src/dev.jpeg";
const diretorioDestino = "./dist";

if (fs.existsSync(documentoOrigem)) {
  const caminhoDoDestino = path.join(
    diretorioDestino,
    path.basename(documentoOrigem)
  );
  fs.copyFileSync(documentoOrigem, caminhoDoDestino);
}
