import CamisetaModel from "../models/camisetaModel.js";

async function crearCamiseta(req, res) {
   try {
      const imagenesCamiseta = req.body.imagenes;
      const nombreCamiseta = req.body.nombre;
      const descripcionCamiseta = req.body.descripcion;
      const equipoCamiseta = req.body.equipo;
      const ligaCamiseta = req.body.liga;
      const precioCamiseta = req.body.precio;
      const temporadaCamiseta = req.body.temporada;
      const tipoCamiseta = req.body.tipo;
      const marcaCamiseta = req.body.marca; 
      const itemsCamisetaCam = req.body.itemsCamista; 

      if (
          imagenesCamiseta === undefined ||
          nombreCamiseta === undefined  ||
          descripcionCamiseta === undefined ||
          equipoCamiseta === undefined || 
          ligaCamiseta === undefined || 
          precioCamiseta === undefined || 
          temporadaCamiseta === undefined  ||
          tipoCamiseta === undefined  ||
          marcaCamiseta === undefined  ||
          itemsCamisetaCam === undefined 
      ) {
          res.status(400).send('Faltan parámetros para crear la camiseta');
          return;
      }else{
          const camisetaCreada = await CamisetaModel.create({ ...req.body });
          res.status(201).send(camisetaCreada);

      }

  } catch (err) {
      res.status(500).send(err);
      return;
  }
}

async function editarCamiseta(req, res) {
  try {
    //completar
  } catch (err) {
    //completar
  }
}

async function listarCamiseta(req, res) {
  try {
    const camisetasBD = await CamisetaModel.find({});
    res.status(200).send(camisetasBD);
  } catch (err) {
      res.status(500).send({ error: err });
  }
}

async function eliminarCamiseta(req, res) {
  try {
    let idCamiseta = req.params.idCamiseta;

    if (idCamiseta === undefined) {
      res.status(400).send({ error: "Falta el parámetro idCamiseta" });
    } else {
      let camiseta = null;

      camiseta = await CamisetaModel.findById(idCamiseta);

      if (camiseta === null) {
         res.status(404).send({ error: "No se ha encontrado la camiseta en la base de datos!" });
      } else {
         await CamisetaModel.deleteOne(camiseta);
         res.status(204).send({ textoRespuesta: "Camiseta eliminada correctamente." });
      }
      
    }
  } catch (err) {
    res.status(500).send({ error: err });
  }
}


export {
    crearCamiseta,
    editarCamiseta,
    listarCamiseta,
    eliminarCamiseta
}