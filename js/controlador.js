/*En esta var crearemos los JSON de cada app*/ 
var empresa = [
    {//JSON 1
        nombreEmpresa: 'Samsung',
        urlImagen: 'img/Tecnologia/Empresas/1.emp.png',
        categoria: 'Tecnología',
        calificacion: 4
    },
    {//JSON 2
        nombreEmpresa: 'Sony',
        urlImagen: 'img/Tecnologia/Empresas/2.emp.png',
        categoria: 'Tecnología',
        calificacion: 4
    },
    {//JSON 3
        nombreEmpresa: 'HP',
        urlImagen: 'img/Tecnologia/Empresas/3.emp.png',
        categoria: 'Tecnología',
        calificacion: 5
    },
    {//JSON 4
        nombreEmpresa: 'Apple',
        urlImagen: 'img/Tecnologia/Empresas/4.emp.png',
        categoria: 'Tecnología',
        calificacion: 5
    }
   
];
function generarempresa(){
    document.getElementById('empresa').innerHTML = '';//para que al momento de guardar una nueva app no aparezacn nuevamente todas app sino, solo la que estamos guardando
        empresa.forEach(function(emp, i){
        //para la calificacion con estrellas
        let estrellas = '';
        for (let i = 0; i < emp.calificacion; i++) {
            estrellas += '<i class="fa-solid fa-star"></i>';  
        }for (let i = 0; i < 5-emp.calificacion; i++) {
            estrellas += '<i class="fa-regular fa-star"></i>';  
        }
        
       
        //para mostrar las emp creadas en los en JSON 
        document.getElementById('empresa').innerHTML += 
        ` <div class=" mt-5 "> 
               <div class="card">
               <div class="Padre grid ">
               <div class="Hijo " style="background-color: white; height: 100px; width: 600px;">
                <img src="${emp.urlImagen}" class="imgCard card-img-left my-auto">
                </div>
                <div class="Hijo card-body mt-5" >
                    <h3 class="card-title " onclick="Irempresa()">${emp.nombreEmpresa}</h3>
                    <p>Acepta pago online</p>
                    <p class="card-text "> Categoría: ${emp.categoria}</p>
                     <div>
                       ${estrellas}
                       
                    </div>

               </div>
               </div>
            </div>`;
    }); 
}
generarempresa()

function Irempresa() {
    
}
/*<img src="${emp.urlImagen}" class="card-img-top img " onclick="editaremp(${i})">
                  <div class="Hijo card-body ">
                    <h5 class="card-title">${emp.nombreAplicacion}</h5>
                    <p class="card-text"> Desarrollador: ${emp.categoria}</p>
                     <div>
                       ${estrellas}
                       <button class="btn btn-outline-danger btn-sm " style="float:right" onclick="eliminar(${i})"><i class="fa-solid fa-trash-can"></i></button> 
                    </div>
                </div>*/ 
