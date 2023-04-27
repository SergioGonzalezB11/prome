const getUsuarioActivo = (nombre) => ({     id: 'ABC123',
    username : nombre});
const usuarioAtivo = getUsuarioActivo('Fenando');
console.log(usuarioAtivo);

const persona = {
    nombre: 'Tony',
    edad : 45,
    clave : 'Iroman'
}
const {nombre}= persona;
console.log( nombre );
const {edad}= persona;
console.log(edad);

const useContex =({clave,nombre,edad,rango = 'Capitan'})=>{
    return{
        usuario : nombre,
        cargo: rango,
        nombreClave :clave,
        años :edad,
        lating:{
            lat : 14.3432,
            lgn : -12.3432
        }
    }
}
const {nombreClave,años,usuario,cargo,lating:{lat, lgn}}= useContex(persona) ;
console.log(nombreClave,años,usuario,cargo);
console.log(lat,lgn);

const promeso = new Promise((resuelta,rechazada)=>{

    //contenido
})
const pedirAumento = new Promise((resolve,reject)=>{
    const tiempo =10;
    if(tiempo>=10){
        resolve('Ya tenngo tiempo para pedir aumento de sueldo');
    }
    else{
        reject('Todavia no puedo pedir aumento, no tengo  la antiguedad');
    }
});
//console.log("🚀 ~ file: index.js:45 ~ pedirAumento ~ pedirAumento:", pedirAumento);
pedirAumento
    .then((result) => {
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    })

