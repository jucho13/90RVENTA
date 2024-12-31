
const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('🟢 Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('🔴 Error al conectar a la base de datos:', error.message);
    process.exit(1); // Salir si no se puede conectar
  }
};

module.exports = connectToDatabase;
