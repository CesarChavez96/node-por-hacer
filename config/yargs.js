const descripcion = {
    demand: true,
    alias: "d",
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: "c",
    desc: "Marca como copletado o pendiete la tarea"
}

const argv = require('yargs')
    .command("crear", "Crea un elmento por hacer", descripcion)
    .command("actualizar", "Actualiza el estado completado de una tarea", {
        descripcion,
        completado
    })
    .command("borrar", "Borra el elemento que se hizo", descripcion)
    .help()
    .argv

module.exports = {
    argv
}