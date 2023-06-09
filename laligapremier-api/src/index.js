import express from 'express';
import cors from 'cors';
import envs from './configs/environments.js';
import routerCamiseta from './routes/routesCamiseta.js'
import authRoute from './routes/auth.routes.js';
import connect from './configs/mongo.js';
import routerCarrito from './routes/carrito.routes.js'
import routerRegistroRelevante from './routes/registrorelevante.routes.js'


const app = express();

app.use(cors());
app.use(express.json());

app.use('/', routerCamiseta);

app.use('/auth', authRoute);

app.use('/' , routerCarrito)

app.use('/' , routerRegistroRelevante)


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