// Carrega as variáveis de ambiente do arquivo .env
require("dotenv").config();

const app = require("./app");
const conectarBanco = require("./config/database");

// Porta utilizada quando o projeto roda localmente
const PORT = process.env.PORT || 3001;

// ─────────────────────────────────────────────
// Inicialização do servidor local
// ─────────────────────────────────────────────

const iniciar = async () => {
  try {
    await conectarBanco();

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (erro) {
    console.error("❌ Não foi possível iniciar o servidor:", erro.message);
  }
};

iniciar();