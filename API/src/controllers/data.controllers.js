import { listaUsuarios } from "../constants/constantes.js";
import { usuario } from "../models/usuario.js";

export const getHome = (req, res) => {
    res.send({
        mensaje: 'Welcome to the API'});
  
}

//crear usuario
export const crearUsuario = (req, res) => {

    const { carnet, nombres, apellidos, genero, facultad,carrera, correo, contrasena } = req.body;
    const nuevousuario = new usuario(carnet, nombres, apellidos, genero, facultad,carrera, correo, contrasena)
    listaUsuarios.push(nuevousuario);
    res.send({
        status:true,
        mensaje: 'Usuario creado',
    });
}

//ver usuario
export const verusuario = (req, res) => {
    res.send({
        status:true,
        usuarios: listaUsuarios,
    });
}


//actualizar usuario
export const actualizarusuario = (req, res) => {
    const { carnet, nombres, apellidos, genero, facultad,carrera, correo, contrasena }  = req.body;
    let existe = false;
    for (let i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i].carnet == carnet) {
            listaUsuarios[i].nombres = nombres;
            listaUsuarios[i].apellidos = apellidos;
            listaUsuarios[i].genero = genero;
            listaUsuarios[i].facultad = facultad;
            listaUsuarios[i].carrera = carrera;
            listaUsuarios[i].correo = correo;
            listaUsuarios[i].contrasena = contrasena;
            res.send({
                status:true,
                mensaje: 'Usuario actualizado',
            });

        }
    }
    res.send({
        status:false,
        mensaje: 'Usuario no encontrado',
    });


}

export const borrarusuario = (req, res) => {
    const { carnet } = req.params;
    for (let i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i].carnet == carnet) {
            listaUsuarios.splice(i, 1);
            res.send({
                status:true,
                mensaje: 'Usuario eliminado',
            });
        }
    }
    res.send({
        status:false,
        mensaje: 'Usuario no encontrado',
    });

}

