// 1 Fecha y hora actual
function obtenerFecha(){
    const fechaActual = new Date()
    console.log("La fecha y la hora actual es:", fechaActual)
}
obtenerFecha()


// 2 Obtener el dia de la semana
function obtenerDiasSemana(fecha){
    const diasSemana=['Domingo','Lunes',',Martes','Miercoles','Jueves','Viernes','Sabado']
    const dia= diasSemana[fecha.getDay()]
    console.log("El dia de la semana es:", dia)
}
const hoy = new Date()
obtenerDiasSemana(hoy)

//--------
function obtenerDiasSemana(fecha){
    const diasSemana=['Domingo','Lunes',',Martes','Miercoles','Jueves','Viernes','Sabado']
    const dia= diasSemana[fecha.getDay()]
    console.log("El dia de la semana es:", dia)
}
const hoy2 = new Date('2024-08-12T00:00:00')
obtenerDiasSemana(hoy2)

//--------
function sumarDias(fecha,dias){
    const nuevaFecha = new Date(fecha)
    nuevaFecha.setDate(fecha.getDate()+dias)
    return nuevaFecha
}

const hoy3 = new Date()
const Semana = sumarDias(hoy3,7)
console.log("En una semana sera:",Semana)