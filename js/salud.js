//CATEGORIA TECNOLOGIA 
var empresa = [
    {//JSON 1
        nombreEmpresa: 'Siman',
        urlImagen: 'img/Salud/Farmacias/1.far.png',
        categoria: 'Salud',
        calificacion: 4
    },
    {//JSON 2
        nombreEmpresa: 'Kielsa',
        urlImagen: 'img/Salud/Farmacias/2.far.png',
        categoria: 'Salud',
        calificacion: 4
    },
    {//JSON 3
        nombreEmpresa: 'Farma City',
        urlImagen: 'img/Salud/Farmacias/3.far.png',
        categoria: 'Salud',
        calificacion: 5
    },
    {//JSON 4
        nombreEmpresa: 'Farmacias del Ahorro',
        urlImagen: 'img/Salud/Farmacias/4.far.png',
        categoria: 'Salud',
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
               <div class="Hijo " align="center" style="background-color: white; height: 100px; width: 600px;">
                <img src="${emp.urlImagen}" class="imgCard card-img-left" align="middle">
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
//funcion para ingresar a los productos de la marca
function Irempresa() {
    
}


