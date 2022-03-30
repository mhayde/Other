
const AlumnoArray=[
    {
        name:'Sofia',
        score:23,
        status:'reprobado'
    },
    {
        name:'Alejandra',
        score:45,
        status:'reprobado'
    },
    {
        name:'Hayde',
        score:95,
        status:'aprobado'
    }
];

let alumnosReprobados = AlumnoArray.filter(AlumnoArray => AlumnoArray.status === "reprobado");
console.log(alumnosReprobados);
