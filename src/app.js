// Carrega as variáveis de ambiente do arquivo .env
require("dotenv").config();

const express = require("express");
const cors = require("cors");

// Inicialização do app Express
const app = express();

// ─────────────────────────────────────────────
// Middlewares globais
// ─────────────────────────────────────────────

// Permite que o frontend (React) faça requisições para esta API
app.use(cors({ origin: "*" }));

// Permite que o Express leia JSON no corpo das requisições
app.use(express.json());

// ─────────────────────────────────────────────
// Rota de verificação (health check)
// ─────────────────────────────────────────────

app.get("/", (req, res) => {
  res.json({
    sucesso: true,
    mensagem: "API funcionando! 🚀",
    versao: "1.0.0",
  });
});

// ─────────────────────────────────────────────
// Rotas da aplicação
// ─────────────────────────────────────────────

const usuarioRoutes = require("./routes/userRoutes");

app.use("/api/usuarios", usuarioRoutes);

// ─────────────────────────────────────────────
// Tratamento de rota não encontrada (404)
// ─────────────────────────────────────────────

app.use((req, res) => {
  res.status(404).json({
    sucesso: false,
    mensagem: `Rota "${req.method} ${req.url}" não encontrada.`,
  });
});

// Exporta o app para o Vercel
module.exports = app;
