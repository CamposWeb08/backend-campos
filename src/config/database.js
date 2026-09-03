const mongoose = require("mongoose");

/**
 * Conecta ao banco de dados MongoDB Atlas.
 *
 * A URL de conexão vem da variável de ambiente:
 * MONGODB_URI
 */

const conectarBanco = async () => {
  try {
    // Se já estiver conectado, não cria outra conexão
    if (mongoose.connection.readyState === 1) {
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ Conectado ao MongoDB Atlas com sucesso!");
  } catch (erro) {
    console.error(
      "❌ Erro ao conectar ao banco de dados:",
      erro.message
    );

    // Envia o erro para quem chamou a função
    throw erro;
  }
};

module.exports = conectarBanco;