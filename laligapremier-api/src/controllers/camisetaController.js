import CamisetaModel from "../models/camisetaModel.js";

async function crearCamiseta(req, res) {
    try {
        // Obtener los datos de la solicitud y convertirlos a mayúsculas
        const imagenesCamiseta = req.body.imagenes;
        const nombreCamiseta = req.body.nombre.toUpperCase();
        const descripcionCamiseta = req.body.descripcion.toUpperCase();
        const equipoCamiseta = req.body.equipo.toUpperCase();
        const ligaCamiseta = req.body.liga.toUpperCase();
        const precioCamiseta = req.body.precio;
        const temporadaCamiseta = req.body.temporada
        const tipoCamiseta = req.body.tipo.toUpperCase();
        const marcaCamiseta = req.body.marca.toUpperCase();
        const dorsalCamiseta = req.body.dorsal;
        const itemsCamisetaCam = req.body.itemsCamiseta;
        const jugadorCamisetta = req.body.jugador.toUpperCase();
        const epocaCamiseta = req.body.epoca.toUpperCase();
        // Verificar si faltan parámetros
        if (
            imagenesCamiseta === undefined ||
            nombreCamiseta === undefined ||
            descripcionCamiseta === undefined ||
            equipoCamiseta === undefined ||
            ligaCamiseta === undefined ||
            precioCamiseta === undefined ||
            temporadaCamiseta === undefined ||
            tipoCamiseta === undefined ||
            marcaCamiseta === undefined ||
            itemsCamisetaCam === undefined ||
            epocaCamiseta === undefined
        ) {
            res.status(400).send('Faltan parámetros para crear la camiseta');
            return;
        } else {
            // Crear la camiseta con los atributos en mayúsculas
            const camisetaCreada = await CamisetaModel.create({
                imagenes: imagenesCamiseta,
                nombre: nombreCamiseta,
                descripcion: descripcionCamiseta,
                equipo: equipoCamiseta,
                liga: ligaCamiseta,
                precio: precioCamiseta,
                temporada: temporadaCamiseta,
                tipo: tipoCamiseta,
                marca: marcaCamiseta,
                jugador: jugadorCamisetta,
                dorsal: dorsalCamiseta,
                epoca: epocaCamiseta,
                itemsCamiseta: itemsCamisetaCam
            });

            res.status(201).send(camisetaCreada);
        }
    } catch (err) {
        res.status(500).send(err);
    }
}


async function editarCamiseta(req, res) {
    try {
        const camisetaId = req.params.idCamiseta;
        const camisetaNueva = req.body;

        const imagenesCamiseta = req.body.imagenes;
        const nombreCamiseta = req.body.nombre;
        const descripcionCamiseta = req.body.descripcion;
        const equipoCamiseta = req.body.equipo;
        const ligaCamiseta = req.body.liga;
        const precioCamiseta = req.body.precio;
        const temporadaCamiseta = req.body.temporada;
        const tipoCamiseta = req.body.tipo;
        const marcaCamiseta = req.body.marca;
        const itemsCamisetaCam = req.body.itemsCamiseta;

        if (
            imagenesCamiseta === undefined ||
            nombreCamiseta === undefined ||
            descripcionCamiseta === undefined ||
            equipoCamiseta === undefined ||
            ligaCamiseta === undefined ||
            precioCamiseta === undefined ||
            temporadaCamiseta === undefined ||
            tipoCamiseta === undefined ||
            marcaCamiseta === undefined ||
            itemsCamisetaCam === undefined
        ) {
            return res.status(400).send('Faltan parámetros para crear la camiseta');
        }
        const camiseta = await CamisetaModel.findById(camisetaId);

        if (!camiseta) {
            return res.status(404).send('La camiseta no existe o no pudo ser encontrada');
        }
        camiseta.imagenes = camisetaNueva.imagenes;
        camiseta.nombre = camisetaNueva.nombre
        camiseta.descripcion = camisetaNueva.descripcion
        camiseta.equipo = camisetaNueva.equipo
        camiseta.liga = camisetaNueva.liga
        camiseta.precio = camisetaNueva.precio;
        camiseta.temporada = camisetaNueva.temporada;
        camiseta.tipo = camisetaNueva.tipo;
        camiseta.marca = camisetaNueva.marca;
        camiseta.itemsCamiseta = camisetaNueva.itemsCamiseta;

        if (camisetaNueva.dorsal !== undefined) camiseta.dorsal = camisetaNueva.dorsal;
        if (camisetaNueva.jugador !== undefined) camiseta.jugador = camisetaNueva.jugador;

        const camisetaActualizada = await camiseta.save();

        res.status(201).send(camisetaActualizada);
    } catch (err) {
        res.status(500).send(err);
        return;
    }
}

async function listarCamiseta(_req, res) {
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

async function obtenerCamisetaPorId(req, res) {
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
                res.status(200).send(camiseta);
            }

        }
    } catch (err) {
        res.status(500).send({ error: err });
    }
}



async function obtenerTallasCamiseta(req, res) {
    try {
        let idCamiseta = req.params.idCamiseta;
        if (idCamiseta === undefined) {
            res.status(400).send({ error: "Falta el parámetro idCamiseta" });
        } else {
            let camiseta = null;

            camiseta = await CamisetaModel.findById(idCamiseta);

            const itemsCamiseta = camiseta.itemsCamiseta;

            let tallas = [];

            itemsCamiseta.forEach(itemCamiseta => {
                tallas.push(itemCamiseta.talla);
            });

            tallas = tallas.filter((talla, index) => {
                return tallas.indexOf(talla) === index;
            });

            if (camiseta === null) {
                res.status(404).send({ error: "No se ha encontrado la camiseta en la base de datos!" });
            } else {
                res.status(200).send(tallas);
            }

        }
    } catch (err) {
        res.status(500).send({ error: err });
    }
}

async function obtenerStockCamiseta(req, res) {
    try {
        const idCamiseta = req.params.idCamiseta;
        let publico = req.body.publico;
        let talla = req.body.talla;

        if (idCamiseta === undefined) {
            res.status(400).send({ error: "Falta el parámetro idCamiseta" });
        } else {
            let camiseta = null;

            camiseta = await CamisetaModel.findById(idCamiseta);

            const itemsCamiseta = camiseta.itemsCamiseta;

            let stock = 0;

            itemsCamiseta.forEach(itemCamiseta => {
                if (itemCamiseta.publico === publico && itemCamiseta.talla === talla) {
                    stock = itemCamiseta.stock;
                }
            });

            if (camiseta === null) {
                res.status(404).send({ error: "No se ha encontrado la camiseta en la base de datos!" });
            } else {
                res.status(200).send({ stock: stock });
            }

        }
    } catch (err) {
        res.status(500).send({ error: err });
    }
}

async function listarNovedades(req, res) {
    try {
        const novedades = await CamisetaModel.find({}).sort({ fecha: -1 }).limit(3);
        res.status(200).send(novedades);
    } catch (err) {
        res.status(500).send({ error: err });
    }
}

export async function filtro(req, res) {
    const { nombre, marca, precioMinimo, precioMaximo, epoca, talla, publico, tipo, } = req.query;
    const filtros = {};
    const camisetas = await CamisetaModel.find({});
    let camisetasFiltradas = []
    if (publico !== undefined) {
        if (publico === "Hombre") {
            camisetasFiltradas = camisetas.filter(camiseta => {
                const itemsCamiseta = camiseta.itemsCamiseta;
                for (let i = 0; i < itemsCamiseta.length; i++) {
                    if (itemsCamiseta[i].publico === "Hombre") {
                        return true;
                    }
                }
                return false;
            });
            if (talla !== undefined) {
                camisetasFiltradas = filtrarTalla(talla, camisetasFiltradas)
            }
            if (marca !== undefined) {
                camisetasFiltradas = filtrarMarca(marca, camisetasFiltradas)
            }
            
            if(precioMaximo != undefined && precioMinimo != undefined){
                camisetasFiltradas = camisetasFiltradas.filter(
                    camiseta => camiseta.precio <= precioMaximo && camiseta.precio >= precioMinimo
                )
            }

        }
        else if (publico === 'Mujer') {
            camisetasFiltradas = camisetas.filter(camiseta => {
                const itemsCamiseta = camiseta.itemsCamiseta;
                for (let i = 0; i < itemsCamiseta.length; i++) {
                    if (itemsCamiseta[i].publico === "Mujer") {
                        return true;
                    }
                }
                return false;
            });
            if (talla !== undefined) {
                camisetasFiltradas = filtrarTalla(talla, camisetasFiltradas)
            }
            if (marca !== undefined) {
                camisetasFiltradas = filtrarMarca(marca, camisetasFiltradas)
            }
            
            if(precioMaximo != undefined && precioMinimo != undefined && precioMaximo > 0 && precioMinimo > 0){
                camisetasFiltradas = camisetasFiltradas.filter(
                    camiseta => camiseta.precio <= precioMaximo && camiseta.precio >= precioMinimo
                )
            }
        }
    }

    if (tipo !== undefined) {
        if (tipo === "CLUB") {
            camisetasFiltradas = camisetas.filter(
                camiseta => camiseta.tipo === "CLUB"
            )
            if (talla !== undefined) {
                camisetasFiltradas = filtrarTalla(talla, camisetasFiltradas)
            }
            if (marca !== undefined) {
                camisetasFiltradas = filtrarMarca(marca, camisetasFiltradas)
            }

            if(precioMaximo != undefined && precioMinimo != undefined){
                camisetasFiltradas = camisetasFiltradas.filter(
                    camiseta => camiseta.precio <= precioMaximo && camiseta.precio >= precioMinimo
                )
            }

        }
        else if (tipo === "SELECCION") {
            camisetasFiltradas = camisetas.filter(
                camiseta => camiseta.tipo === "SELECCIÓN"
            )
            if (talla !== undefined) {
                camisetasFiltradas = filtrarTalla(talla, camisetasFiltradas)
            }
            if (marca !== undefined) {
                camisetasFiltradas = filtrarMarca(marca, camisetasFiltradas)
            }
            
            if(precioMaximo != undefined && precioMinimo != undefined){
                camisetasFiltradas = camisetasFiltradas.filter(
                    camiseta => camiseta.precio <= precioMaximo && camiseta.precio >= precioMinimo
                )
            }
        }
    }


    if (epoca !== undefined) {
        if (epoca === "CLASICO") {
            camisetasFiltradas = camisetas.filter(
                camiseta => camiseta.epoca === "CLÁSICO"
            )
            if (talla !== undefined) {
                camisetasFiltradas = filtrarTalla(talla, camisetasFiltradas)
            }
            if (marca !== undefined) {
                camisetasFiltradas = filtrarMarca(marca, camisetasFiltradas)
            }
            
            if(precioMaximo != undefined && precioMinimo != undefined){
                camisetasFiltradas = camisetasFiltradas.filter(
                    camiseta => camiseta.precio <= precioMaximo && camiseta.precio >= precioMinimo
                )
            }
        }
        else if (epoca === "MODERNO") {
            camisetasFiltradas = camisetas.filter(
                camiseta => camiseta.epoca === "MODERNO"
            )
            if (talla !== undefined) {
                camisetasFiltradas = filtrarTalla(talla, camisetasFiltradas)
            }
            if (marca !== undefined) {
                camisetasFiltradas = filtrarMarca(marca, camisetasFiltradas)
            }
            
            if(precioMaximo != undefined && precioMinimo != undefined){
                camisetasFiltradas = camisetasFiltradas.filter(
                    camiseta => camiseta.precio <= precioMaximo && camiseta.precio >= precioMinimo
                )
            }
        }
    }


    
    return res.status(200).send(camisetasFiltradas)
}


function filtrarMarca(marca, camisetasFiltradas) {
    if (marca === "ADIDAS") {
        camisetasFiltradas = camisetasFiltradas.filter(
            camiseta => camiseta.marca === "ADIDAS"
        )
    }
    else if (marca === "NIKE") {
        camisetasFiltradas = camisetasFiltradas.filter(
            camiseta => camiseta.marca === "NIKE"
        )
    }
    else if (marca === "PUMA") {
        camisetasFiltradas = camisetasFiltradas.filter(
            camiseta => camiseta.marca === "PUMA"
        )
    }
    return camisetasFiltradas
}

function filtrarTalla(talla, camisetasFiltradas) {
    if (talla === "XS") {
        camisetasFiltradas = camisetasFiltradas.filter(camiseta => {
            const itemsCamiseta = camiseta.itemsCamiseta;
            for (let i = 0; i < itemsCamiseta.length; i++) {
                if (itemsCamiseta[i].talla === "XS") {
                    return true;
                }
            }
            return false;
        });
    }
    if (talla === "S") {
        camisetasFiltradas = camisetasFiltradas.filter(camiseta => {
            const itemsCamiseta = camiseta.itemsCamiseta;
            for (let i = 0; i < itemsCamiseta.length; i++) {
                if (itemsCamiseta[i].talla === "S") {
                    return true;
                }
            }
            return false;
        });
    }
    if (talla === "M") {
        camisetasFiltradas = camisetasFiltradas.filter(camiseta => {
            const itemsCamiseta = camiseta.itemsCamiseta;
            for (let i = 0; i < itemsCamiseta.length; i++) {
                if (itemsCamiseta[i].talla === "M") {
                    return true;
                }
            }
            return false;
        });
    }
    if (talla === "L") {
        camisetasFiltradas = camisetasFiltradas.filter(camiseta => {
            const itemsCamiseta = camiseta.itemsCamiseta;
            for (let i = 0; i < itemsCamiseta.length; i++) {
                if (itemsCamiseta[i].talla === "L") {
                    return true;
                }
            }
            return false;
        });
    }
    if (talla === "XL") {
        camisetasFiltradas = camisetasFiltradas.filter(camiseta => {
            const itemsCamiseta = camiseta.itemsCamiseta;
            for (let i = 0; i < itemsCamiseta.length; i++) {
                if (itemsCamiseta[i].talla === "XL") {
                    return true;
                }
            }
            return false;
        });
    }
    return camisetasFiltradas
}



export {
    crearCamiseta,
    editarCamiseta,
    listarCamiseta,
    eliminarCamiseta,
    obtenerCamisetaPorId,
    obtenerTallasCamiseta,
    obtenerStockCamiseta,
    listarNovedades,

}
