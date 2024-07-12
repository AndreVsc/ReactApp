import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import chamadoRoutes from './routes/chamado.js';

dotenv.config();

const url = process.env.DATABASE_URL;

async function main() {
  try {
    console.info('Connecting to database...');
    await mongoose.connect(url);
    console.info('Connected to database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }

  const app = express();
  
  // Habilitando o CORS
  app.use(cors());

  app.use(express.json());
  
  // Defina o uso das suas rotas
  app.use('/chamado', chamadoRoutes); // Verifique se o caminho e o nome do arquivo estão corretos

  const port = process.env.PORT || 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`App running on http://localhost:${port}`);
  });
}

main().catch(console.error);
