
export class usuario {
    constructor(carnet, nombres, apellidos, genero, facultad ,carrera, correo, contrasena)
   
    {
    this.carnet = carnet;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.genero = genero;
    this.facultad = facultad;
    this.carrera = carrera;
    this.correo = correo;
    this.contrasena = contrasena;
    }

    getcarnet(){
        return this.carnet;
    }
    getnombres(){
        return this.nombres;
    }
    getapellidos(){
        return this.apellidos;
    }
    getgenero(){
        return this.genero;
    }
    getfacultad(){
        return this.facultad;
    }   
    getcarrera(){
        return this.carrera;
    }
    getcorreo(){
        return this.correo;
    }
    getcontrasena(){
        return this.contrasena;
    }

    setcarnet(carnet){
        this.carnet = carnet;
    }
    setnombres(nombres){
        this.nombres = nombres;
    }
    setapellidos(apellidos){
        this.apellidos = apellidos;
    }
    setgenero(genero){
        this.genero = genero;
    }
    setfacultad(facultad){
        this.facultad = facultad;
    }
    setcarrera(carrera){
        this.carrera = carrera;
    }
    setcorreo(correo){
        this.correo = correo;
    }
    setcontrasena(contrasena){
        this.contrasena = contrasena;
    }
    


    

    
}