import express from 'express';
import cors from 'cors';
import envs from './configs/environments.js';
//import ruta from './routes/mensajeria.routes.js';
import authRoute from './routes/auth.routes.js';
import connect from './configs/mongo.js';

const app = express();

app.use(cors());
app.use(express.json());

//app.use('', ruta);
app.use('/auth', authRoute);

console.log('Conectando a la base de datos...');
connect()
  .then(() => {
    console.log('MongoDB Conectado Correctamente');
    app.listen(envs.PORT, async () => {
      console.log(`Servidor iniciado en el PUERTO: ${envs.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(-1);
  });